import { render, screen } from "@testing-library/react";
import {
  RouterProvider,
  createMemoryRouter,
  useParams,
} from "react-router-dom";
import { routerConfig } from ".";
import App from "../App";

const getRouter = (path: string) => {
  return createMemoryRouter(routerConfig, {
    initialEntries: [path],
  });
};

jest.mock("@/pages/Test/index.tsx", () => {
  return {
    Test: () => <div data-testid='test-component'>test</div>,
  };
});

jest.mock("@/pages/ModalPage/index.tsx", () => {
  return {
    ModalPage: () => <div data-testid='modal-component'>test</div>,
  };
});

jest.mock("@/pages/FormPage/index.tsx", () => {
  return {
    FormPage: () => <div data-testid='form-component'>test</div>,
  };
});
jest.mock("@/pages/ApiPage/index.tsx", () => {
  return {
    ApiPage: () => <div data-testid='api-component'>test</div>,
  };
});
jest.mock("@/pages/ApiDetailPage/index.tsx", () => {
  return {
    ApiDetailPage: () => {
      const { name } = useParams();
      return <div data-testid={name}>test</div>;
    },
  };
});
jest.mock("@/pages/WizardFormPage/index.tsx", () => {
  return {
    WizardFormPage: () => (
      <div data-testid='wizard-form-page-component'>test</div>
    ),
  };
});

describe("router testing", () => {
  it("render app", () => {
    render(<App />);
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("When user is in route '/' Then render test component", () => {
    const router = getRouter("/");

    render(<RouterProvider router={router} />);

    expect(screen.getByTestId("test-component")).toBeInTheDocument();
  });
  it("When user is in route '/home/modal' Then render modal component", () => {
    const router = getRouter("/home/modal");

    render(<RouterProvider router={router} />);

    expect(screen.getByTestId("modal-component")).toBeInTheDocument();
  });

  it("When user is in route '/home/form' Then render form component", () => {
    const router = getRouter("/home/form");

    render(<RouterProvider router={router} />);

    expect(screen.getByTestId("form-component")).toBeInTheDocument();
  });

  it("When user is in route '/home/api/:name' Then render api component", () => {
    const router = getRouter("/home/api");

    render(<RouterProvider router={router} />);

    expect(screen.getByTestId("api-component")).toBeInTheDocument();
  });

  it("When user is in route 'home/api' Then render api detail component", () => {
    const router = getRouter("/home/api/api-detail-component");

    render(<RouterProvider router={router} />);

    expect(screen.getByTestId("api-detail-component")).toBeInTheDocument();
  });

  it("When user is in route '/home/wizardForm' Then render wizard form page component", () => {
    const router = getRouter("/home/wizardForm");

    render(<RouterProvider router={router} />);

    expect(
      screen.getByTestId("wizard-form-page-component")
    ).toBeInTheDocument();
  });
});
