// import * as api from "@/api/fetchPoke";
import { getHistoryInput } from "@/utiils/testing-function";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryHistory, createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { ApiPage } from ".";

jest.mock("@tanstack/react-query", () => {
  const original = jest.requireActual("@tanstack/react-query");
  const fakePoke = [
    {
      name: "foo",
      imgUrl: "imgUrl1",
    },
    {
      name: "test",
      imgUrl: "imgUrl2",
    },
  ];
  return {
    ...original,
    useQuery: jest
      .fn()
      .mockReturnValueOnce({
        isLoading: true,
      })
      .mockReturnValue({ isLoading: false, data: fakePoke }),
  };
});

describe("apiPage testing", () => {
  const user = userEvent.setup();
  let history: MemoryHistory;
  beforeEach(() => {
    const client = new QueryClient();
    history = createMemoryHistory();
    history.push = jest.fn();

    render(
      <QueryClientProvider client={client}>
        <Router location={history.location} navigator={history}>
          <ApiPage />
        </Router>
      </QueryClientProvider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("render loading", async () => {
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it("render poke data", async () => {
    expect(screen.getAllByRole("link").length).toBe(2);
    expect(screen.getAllByRole("link")[0]).toHaveTextContent("foo");
  });

  it("click name like navigate to detail page", async () => {
    const link = screen.getAllByRole("link")[0];
    await user.click(link);
    expect(history.push).toHaveBeenCalledWith(...getHistoryInput("/foo"));
  });
});
