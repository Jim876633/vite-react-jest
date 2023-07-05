import { Home } from "@/pages/HomePage";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { MemoryHistory, createMemoryHistory } from "history";
import { Router } from "react-router-dom";

const getHistoryInput = (pathname: string) => {
  return [
    {
      hash: "",
      pathname,
      search: "",
    },
    undefined,
    {
      preventScrollReset: undefined,
      relative: undefined,
      replace: false,
      state: undefined,
    },
  ];
};

describe("navbar testing", () => {
  let history: MemoryHistory;
  beforeEach(() => {
    history = createMemoryHistory();
    history.push = jest.fn();
    render(
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>
    );
  });

  it("click form link goes to home page", async () => {
    const formLink = screen.getByText("Home");
    await user.click(formLink);
    expect(history.push).toHaveBeenCalledWith(...getHistoryInput("/home"));
  });

  it("click form button go to home page", async () => {
    const button = screen.getByText("Form");
    await user.click(button);
    expect(history.push).toHaveBeenCalledWith(...getHistoryInput("/home/form"));
  });

  it("click api link goes to api page", async () => {
    const apiLink = screen.getByText("Api");
    await user.click(apiLink);
    expect(history.push).toHaveBeenCalledWith(...getHistoryInput("/home/api"));
  });

  it("click modal link goes to modal page", async () => {
    const modalLink = screen.getByText("Modal");
    await user.click(modalLink);
    expect(history.push).toHaveBeenCalledWith(
      ...getHistoryInput("/home/modal")
    );
  });

  it("click wizardForm link goes to wizardForm page", async () => {
    const wizardFormLink = screen.getByText("Wizard Form");
    await user.click(wizardFormLink);
    expect(history.push).toHaveBeenCalledWith(
      ...getHistoryInput("/home/wizardForm")
    );
  });
});
