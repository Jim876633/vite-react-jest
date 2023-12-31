import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Home } from ".";
import { BrowserRouter } from "react-router-dom";
import "@/i18n";

describe("screen show", () => {
  let button: HTMLElement;

  beforeEach(async () => {
    render(<Home />, { wrapper: BrowserRouter });
    button = await screen.findByRole("button");
  });

  it("show 'hello' on the document", () => {
    expect(screen.getByText("Hello !")).toBeInTheDocument();
  });

  it("show 'count is 0' on the initial button", async () => {
    expect(button.innerHTML).toBe("count is 0");
  });

  it("show 'count is 1' on the button innerHTML if user click button once", async () => {
    await user.click(button);
    expect(button.innerHTML).toBe("count is 1");
  });

  it("show 'count is 2' on the button innerHTML if user click button twice", async () => {
    await user.click(button);
    await user.click(button);
    expect(button.innerHTML).toBe("count is 2");
  });
});
