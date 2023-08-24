import { routerConfig } from "@/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Modal } from "./components/Modal";
import { ModalContextProvider } from "./context/ModalContext";
import { Provider } from "react-redux";
import { store } from "./store";

const router = createBrowserRouter(routerConfig, {
  basename: import.meta.env.BASE_URL,
});

const queryClient = new QueryClient();

function App() {
  const a = 1;
  const b = { a: "1", b: "2" };
  const c = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const d = (x) => x + 1;
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ModalContextProvider>
          <>
            <button
              className="133"
              id="2323"
              name="123323"
              data-test="12"
              data-id="2342"
            >
              click
            </button>
            <Modal />
            <RouterProvider router={router} />
          </>
        </ModalContextProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
