import { RenderResult, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormPage } from ".";

describe("form input testing", () => {
  const user = userEvent.setup();
  let formComponent: RenderResult<
      typeof import("@testing-library/dom/types/queries"),
      HTMLElement,
      HTMLElement
    >,
    submitButton: Element,
    firstNameInput: Element,
    lastNameInput: Element,
    twIdInput: Element;

  beforeEach(() => {
    formComponent = render(<FormPage />);
    firstNameInput = formComponent.getByTestId("firstName");
    lastNameInput = formComponent.getByTestId("lastName");
    twIdInput = formComponent.getByTestId("twId");
    submitButton = screen.getByRole("button", { name: /submit/i });
  });

  it("success to submit", async () => {
    await user.type(firstNameInput, "John");
    await user.type(lastNameInput, "Tim");
    await user.type(twIdInput, "Q123701111");
    await user.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith(
      JSON.stringify({
        firstName: "John",
        lastName: "Tim",
        gender: "",
        twId: "Q123701111",
      })
    );
  });

  it("fail to all input with empty", async () => {
    await user.click(submitButton);
    const firstNameError = formComponent.getByTestId("firstName-error");
    const lastNameError = formComponent.getByTestId("lastName-error");
    const twIdError = formComponent.getByTestId("twId-error");
    expect(firstNameError).toHaveTextContent("必填項目");
    expect(lastNameError).toHaveTextContent("必填項目");
    expect(twIdError).toHaveTextContent("必填項目");
  });

  it("fail to firstName input with 16 length words", async () => {
    await user.type(firstNameInput, "1234567890123456");
    await user.click(submitButton);

    const firstNameError = formComponent.getByTestId("firstName-error");

    expect(firstNameError).toHaveTextContent("不可大於 15 字");
  });

  it("fail to lastName input with 21 length words", async () => {
    await user.type(lastNameInput, "123456789012345678901");
    await user.click(submitButton);

    const lastNameError = formComponent.getByTestId("lastName-error");

    expect(lastNameError).toHaveTextContent("不可大於 20 字");
  });

  it("fail to twId input with Q123", async () => {
    await user.type(twIdInput, "Q123");
    await user.click(submitButton);

    const twIdError = formComponent.getByTestId("twId-error");

    expect(twIdError).toHaveTextContent("身分證號格式不合");
  });

  it("fail to twId input with Q123456789", async () => {
    await user.type(twIdInput, "Q123456789");
    await user.click(submitButton);

    const twIdError = formComponent.getByTestId("twId-error");

    expect(twIdError).toHaveTextContent("身分證號格式不合");
  });
});
