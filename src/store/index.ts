import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import todoSlice from "./todo";

export const store = configureStore({
  reducer: { counter: counterSlice.reducer, todo: todoSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
