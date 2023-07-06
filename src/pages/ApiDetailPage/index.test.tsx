import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { ApiDetailPage } from ".";

jest.mock("@tanstack/react-query", () => {
  const original = jest.requireActual("@tanstack/react-query");
  const fakePokeDetail = {
    name: "foo",
    imgUrl: "imgUrl1",
  };
  return {
    ...original,
    useQuery: jest
      .fn()
      .mockReturnValueOnce({
        isLoading: true,
      })
      .mockReturnValue({ isLoading: false, data: fakePokeDetail }),
  };
});

describe("testing ApiDetailPage", () => {
  beforeEach(() => {
    const client = new QueryClient();

    render(
      <QueryClientProvider client={client}>
        <ApiDetailPage />
      </QueryClientProvider>
    );
  });
  it("render loading", async () => {
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it("render poke data", async () => {
    screen.debug();
    expect(screen.getByRole("img").getAttribute("src")).toBe("imgUrl1");
    expect(screen.getByRole("heading").textContent).toBe("foo");
  });
});
