import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = { todoList: [] as TodoState[] };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todoList.push({
        title: action.payload,
        id: Math.random(),
        isDone: false,
      });
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      state.todoList = state.todoList.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
  },
});

export interface TodoState {
  id: number;
  title: string;
  isDone: boolean;
}

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice;
