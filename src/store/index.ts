import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import todoSlice from "./todo";
import { testApi } from "@/servers/itemList";

export const store = configureStore({
  reducer: {
    [testApi.reducerPath]: testApi.reducer,
    counter: counterSlice.reducer,
    todo: todoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(testApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
