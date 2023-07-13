import { ApiDetailPage } from "@/pages/ApiDetailPage";
import { ApiPage } from "@/pages/ApiPage";
import { FormPage } from "@/pages/FormPage";
import { Home } from "@/pages/HomePage";
import { ModalPage } from "@/pages/ModalPage";
import { Test } from "@/pages/Test";
import { WizardFormPage } from "@/pages/WizardFormPage";
import { Navigate } from "react-router-dom";

export const routerConfig = [
  {
    path: "/",
    element: <Navigate to='/home' />,
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
];
