import { Home } from "@/pages/HomePage/Home";
import { getHistoryInput } from "@/utiils/testing-function";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryHistory, createMemoryHistory } from "history";
import i18n from "i18next";
import { BrowserRouter, Router } from "react-router-dom";
import { Navbar } from ".";
import { HomePage } from "@/pages/HomePage";

describe("navbar testing", () => {
  let history: MemoryHistory;
  const user = userEvent.setup();
  beforeEach(() => {
    history = createMemoryHistory();
    history.push = jest.fn();
    render(
      <Router location={history.location} navigator={history}>
        <Navbar />
      </Router>
    );
  });

  it("click form link goes to home page", async () => {
    const formLink = screen.getByText(/home/i);
    await user.click(formLink);
    expect(history.push).toHaveBeenCalledWith(...getHistoryInput("/home/"));
  });

  it("click form button go to home page", async () => {
    const button = screen.getByText("form");
    await user.click(button);
    expect(history.push).toHaveBeenCalledWith(...getHistoryInput("/home/form"));
  });

  it("click api link goes to api page", async () => {
    const apiLink = screen.getByText(/api/i);
    await user.click(apiLink);
    expect(history.push).toHaveBeenCalledWith(...getHistoryInput("/home/api"));
  });

  it("click modal link goes to modal page", async () => {
    const modalLink = screen.getByText(/modal/i);
    await user.click(modalLink);
    expect(history.push).toHaveBeenCalledWith(
      ...getHistoryInput("/home/modal")
    );
  });

  it("click wizardForm link goes to wizardForm page", async () => {
    const wizardFormLink = screen.getByText(/WizardForm/i);
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
        <HomePage />
      </BrowserRouter>
    );
    const select = screen.getByRole("combobox");
    await user.selectOptions(select, "tw");
    expect(select).toHaveValue("tw");
    expect(i18n.changeLanguage).toHaveBeenCalledWith("tw");
  });
});
