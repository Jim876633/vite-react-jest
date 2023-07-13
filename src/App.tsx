import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routerConfig } from "@/router";
import { ModalContextProvider } from "./context/ModalContext";
import { Modal } from "./components/Modal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(routerConfig, {
  basename: import.meta.env.BASE_URL,
});
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalContextProvider>
        <>
          <Modal />
          <RouterProvider router={router} />
        </>
      </ModalContextProvider>
    </QueryClientProvider>
  );
}

export default App;
