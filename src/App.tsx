import { routerConfig } from "@/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Modal } from "./components/Modal";
import { ModalContextProvider } from "./context/ModalContext";

const router = createBrowserRouter(routerConfig, {
  basename: import.meta.env.BASE_URL,
});

console.log(import.meta.env.BASE_URL);
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
