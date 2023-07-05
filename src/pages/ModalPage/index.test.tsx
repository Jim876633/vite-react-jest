import { customModalRender } from "@/utiils/custom-testing-library";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ModalPage } from ".";
import { article1, article2 } from "./data/modal.data";

describe("modal testing", () => {
  const user = userEvent.setup();
  let openModal: () => void;

  beforeEach(() => {
    openModal = customModalRender(<ModalPage />).openModal;
  });

  it("click article one call openModal function", async () => {
    const article1Btn = screen.getByRole("button", { name: /article1/i });
    await user.click(article1Btn);
    expect(openModal).toHaveBeenCalledWith(article1);
  });

  it("click article one call openModal function", async () => {
    const article1Btn = screen.getByRole("button", { name: /article2/i });
    await user.click(article1Btn);
    expect(openModal).toHaveBeenCalledWith(article2);
  });
});
