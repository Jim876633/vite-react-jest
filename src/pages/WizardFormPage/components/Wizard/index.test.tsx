import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Wizard } from ".";
import { initialValues } from "../../steps";

describe("test wizard form", () => {
  const mockGoNext = jest.fn();
  const mockGoBack = jest.fn();
  const user = userEvent.setup();
  const renderComponent = (step: number, initial: any) =>
    render(
      <Wizard
        initialValues={initial}
        step={step}
        goNext={mockGoNext}
        goBack={mockGoBack}
      />
    );
  let mockInitialValues = { ...initialValues };
  afterEach(() => {
    mockInitialValues = { ...initialValues };
  });

  it("fail for first step1 empty ", async () => {
    const wizardForm = renderComponent(1, mockInitialValues);
    const nextBtn = screen.getByRole("button", { name: /next/i });
    await user.click(nextBtn);
    const firstError = wizardForm.getByTestId("firstName-error");
    const lastError = wizardForm.getByTestId("lastName-error");
    expect(firstError.textContent).toBe("必填項目");
    expect(lastError.textContent).toBe("必填項目");
  });

  it("step1 has correct input click next to step2", async () => {
    mockInitialValues.firstName = "john";
    mockInitialValues.lastName = "mike";
    renderComponent(1, mockInitialValues);
    const nextBtn = screen.getByRole("button", { name: /next/i });
    await user.click(nextBtn);
    expect(mockGoNext).toHaveBeenCalledWith(mockInitialValues);
  });

  it("step2 click back go to step1", async () => {
    mockInitialValues.firstName = "john";
    mockInitialValues.lastName = "mike";
    renderComponent(2, mockInitialValues);
    const backBtn = screen.getByRole("button", { name: /back/i });
    await user.click(backBtn);
    expect(mockGoBack).toHaveBeenCalled();
  });

  it("fail for step2 empty", async () => {
    mockInitialValues.firstName = "john";
    mockInitialValues.lastName = "mike";
    renderComponent(2, mockInitialValues);
    const nextBtn = screen.getByRole("button", { name: /next/i });
    await user.click(nextBtn);
    const twIdError = screen.getByTestId("twId-error");
    expect(twIdError).toBeInTheDocument();
  });

  it("step2 has correct input click next to step3", async () => {
    mockInitialValues.firstName = "john";
    mockInitialValues.lastName = "mike";
    mockInitialValues.twId = "Q123701111";
    renderComponent(2, mockInitialValues);
    const nextBtn = screen.getByRole("button", { name: /next/i });
    await user.click(nextBtn);
    expect(mockGoNext).toHaveBeenCalledWith(mockInitialValues);
  });

  it("step3 click back go to step2", async () => {
    mockInitialValues.firstName = "john";
    mockInitialValues.lastName = "mike";
    mockInitialValues.twId = "Q123701111";
    renderComponent(3, mockInitialValues);
    const backBtn = screen.getByRole("button", { name: /back/i });
    await user.click(backBtn);
    expect(mockGoBack).toHaveBeenCalled();
  });

  it("fail for step2 empty", async () => {
    mockInitialValues.firstName = "john";
    mockInitialValues.lastName = "mike";
    mockInitialValues.twId = "Q123701111";
    renderComponent(3, mockInitialValues);
    const submitBtn = screen.getByRole("button", { name: /submit/i });
    await user.click(submitBtn);
    const heightError = screen.getByTestId("height-error");
    const weightError = screen.getByTestId("weight-error");
    expect(heightError).toBeInTheDocument();
    expect(weightError).toBeInTheDocument();
  });

  it("step2 has correct input click next alert values", async () => {
    mockInitialValues.firstName = "john";
    mockInitialValues.lastName = "mike";
    mockInitialValues.twId = "Q123701111";
    mockInitialValues.height = "175";
    mockInitialValues.weight = "80";

    renderComponent(3, mockInitialValues);
    const submitBtn = screen.getByRole("button", { name: /submit/i });
    await user.click(submitBtn);
    expect(mockGoNext).not.toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith(
      JSON.stringify(mockInitialValues)
    );
  });
});
