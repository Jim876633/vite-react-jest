import { RootState } from "@/store";
import { addTodo, removeTodo, toggleTodo } from "@/store/todo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "./index.module.scss";

export const TodoPage = () => {
  const todoList = useSelector((state: RootState) => state.todo.todoList);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const addTodoHandler = () => {
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <div className={styled.container}>
      <input
        type='text'
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
          <input type='checkbox' checked={todo.isDone} readOnly />
          <span>{todo.title}</span>
          <button onClick={() => dispatch(removeTodo(todo.id))}> remove</button>
        </li>
      ))}
    </div>
  );
};
