import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

describe("app test", () => {
  let button: HTMLElement;

  beforeEach(async () => {
    render(<App />);
    button = await screen.findByRole("button");
  });

  it("should render", () => {
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  it("testing button init", async () => {
    expect(button.innerHTML).toBe("count is 0");
  });

  it("test button click", async () => {
    await user.click(button);
    expect(button.innerHTML).toBe("count is 1");
  });
});
