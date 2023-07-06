import { customModalRender } from "@/utiils/custom-testing-library";
import { Modal } from ".";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("modal testing", () => {
  const user = userEvent.setup();

  it("click close btn call close function", async () => {
    const { closeModal } = customModalRender(<Modal />, true);
    const closeBtn = screen.getByTestId("close-btn");
    await user.click(closeBtn);
    expect(closeModal).toHaveBeenCalled();
  });

  it("show content correctly", async () => {
    customModalRender(<Modal />, true, "content");
    expect(screen.getByText("content")).toBeInTheDocument();
  });
});
