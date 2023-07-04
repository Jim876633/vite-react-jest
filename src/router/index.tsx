import { ApiDetailPage } from "@/pages/ApiDetailPage";
import { ApiPage } from "@/pages/ApiPage";
import { FormPage } from "@/pages/FormPage";
import { Home } from "@/pages/HomePage";
import { ModalPage } from "@/pages/ModalPage";
import { Test } from "@/pages/Test";
import { WizardFormPage } from "@/pages/WizardFormPage";
import { Step1 } from "@/pages/WizardFormPage/components/Step1";
import { Step2 } from "@/pages/WizardFormPage/components/Step2";
import { Step3 } from "@/pages/WizardFormPage/components/Step3";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
  },
  {
    path: "home",
    element: <Home />,
    children: [
      { index: true, element: <Test /> },
      {
        path: "form",
        element: <FormPage />,
      },
      {
        path: "modal",
        element: <ModalPage />,
      },
      {
        path: "api",
        element: <ApiPage />,
      },
      {
        path: "api/:name",
        element: <ApiDetailPage />,
      },
      {
        path: "wizardForm",
        element: <WizardFormPage />,
      },
    ],
  },
]);
