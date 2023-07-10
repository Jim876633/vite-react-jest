import { Home } from "@/pages/HomePage";
import { getHistoryInput } from "@/utiils/testing-function";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryHistory, createMemoryHistory } from "history";
import { BrowserRouter, Router } from "react-router-dom";
import i18n from "i18next";

describe("navbar testing", () => {
  let history: MemoryHistory;
  const user = userEvent.setup();
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

jest.mock("i18next");

describe("language testing", () => {
  it("change language call i18n.changeLanguage with correct value", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const select = screen.getByRole("combobox");
    await user.selectOptions(select, "tw");
    expect(select).toHaveValue("tw");
    expect(i18n.changeLanguage).toHaveBeenCalledWith("tw");
  });
});
