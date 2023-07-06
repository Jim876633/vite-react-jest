import { render, screen } from "@testing-library/react";
import { Progress } from ".";

describe("testing progress process", () => {
  const renderComponent = (step: number) => render(<Progress step={step} />);
  it("in the step1 the progress span className", () => {
    renderComponent(1);
    const stepItems = screen.getAllByTestId("step");
    expect(stepItems[0].classList.contains("active")).toBeTruthy();
    expect(stepItems[1].classList.contains("active")).toBeFalsy();
    expect(stepItems[2].classList.contains("active")).toBeFalsy();
  });

  it("in the step2 the progress span className", () => {
    renderComponent(2);
    const stepItems = screen.getAllByTestId("step");
    expect(stepItems[0].classList.contains("active")).toBeTruthy();
    expect(stepItems[1].classList.contains("active")).toBeTruthy();
    expect(stepItems[2].classList.contains("active")).toBeFalsy();
  });

  it("in the step3 the progress span className", () => {
    renderComponent(3);
    const stepItems = screen.getAllByTestId("step");
    expect(stepItems[0].classList.contains("active")).toBeTruthy();
    expect(stepItems[1].classList.contains("active")).toBeTruthy();
    expect(stepItems[2].classList.contains("active")).toBeTruthy();
  });
});
