// import * as api from "@/api/fetchPoke";
import { getHistoryInput } from "@/utiils/testing-function";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryHistory, createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { ApiPage } from ".";

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

  it("render loading", async () => {
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it("render poke data", async () => {
    await waitFor(() => {
      expect(screen.getByRole("link")).toBeInTheDocument();
    });
  });

  it("click name like navigate to detail page", async () => {
    await waitFor(async () => {
      const link = screen.getByRole("link");
      await user.click(link);
      expect(history.push).toHaveBeenCalledWith(...getHistoryInput("/test1"));
    });
  });
});
