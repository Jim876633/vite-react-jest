import { addTodo, removeTodo, toggleTodo } from "@/store/todo";
import useAppDispatch from "@/utiils/hooks/useAppDispatch";
import useAppSelector from "@/utiils/hooks/useAppSelector";
import { useState } from "react";
import styled from "./index.module.scss";

export const TodoPage = () => {
  const todoList = useAppSelector((state) => state.todo.todoList);
  const dispatch = useAppDispatch();

  const [todo, setTodo] = useState("");

  const addTodoHandler = () => {
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <div className={styled.container}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodoHandler}>ADD</button>
      {todoList.map((todo) => (
        <li
          key={todo.id}
          className={
            todo.isDone ? `${styled.todo} ${styled.done}` : styled.todo
          }
          onClick={() => dispatch(toggleTodo(todo.id))}
        >
          <input type="checkbox" checked={todo.isDone} readOnly />
          <span>{todo.title}</span>
          <button onClick={() => dispatch(removeTodo(todo.id))}> remove</button>
        </li>
      ))}
    </div>
  );
};
