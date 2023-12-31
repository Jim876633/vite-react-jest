import { ApiDetailPage } from "@/pages/ApiDetailPage";
import { ApiPage } from "@/pages/ApiPage";
import { CounterPage } from "@/pages/CounterPage";
import { FormPage } from "@/pages/FormPage";
import { HomePage } from "@/pages/HomePage";
import { ModalPage } from "@/pages/ModalPage";
import { Home } from "@/pages/HomePage/Home";
import { TodoPage } from "@/pages/TodoPage";
import { WizardFormPage } from "@/pages/WizardFormPage";
import { Navigate } from "react-router-dom";
import { RtkQueryPage } from "@/pages/RtkQueryPage";

export const routerConfig = [
  {
    path: "/",
    element: <Navigate to='/home' />,
  },
  {
    path: "home",
    element: <HomePage />,
    children: [
      { index: true, element: <Home /> },
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
      {
        path: "counterPage",
        element: <CounterPage />,
      },
      {
        path: "todoPage",
        element: <TodoPage />,
      },
      {
        path: "RtkQueryPage",
        element: <RtkQueryPage />,
      },
    ],
  },
];
