import { routerConfig } from "@/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

describe("testing ApiDetailPage", () => {
  beforeEach(() => {
    const client = new QueryClient();

    const router = createMemoryRouter(routerConfig, {
      initialEntries: ["/home/api/test1"],
    });

    render(
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    );
  });
  it("render loading", async () => {
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it("render poke data", async () => {
    await waitFor(() => {
      expect(screen.getByRole("heading").textContent).toBe("test1");
      expect(screen.getByRole("img").getAttribute("src")).toBe(
        "https://fakeimg.pl/300/"
      );
    });
  });
});
