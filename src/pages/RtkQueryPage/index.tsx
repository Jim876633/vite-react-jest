import {
  useAddItemMutation,
  useGetListQuery,
  useGetTestQuery,
  useRemoveItemMutation,
} from "@/servers/itemList";
import { useState } from "react";
import styled from "./index.module.scss";

export const RtkQueryPage = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const { data: testQueryData, isLoading: isTestQueryLoading } =
    useGetTestQuery();
  const { data: listQueryData, isLoading: isListQueryLoading } =
    useGetListQuery();

  const [addItem] = useAddItemMutation();
  const [removeItem] = useRemoveItemMutation();

  const addItemHandler = () => {
    if (inputValue) {
      addItem({ title: inputValue, id: Math.random() });
      setInputValue("");
    }
  };

  const deleteHandler = (id: number) => {
    removeItem(id);
  };

  if (isTestQueryLoading || isListQueryLoading) return <div>Loading...</div>;

  if (testQueryData && listQueryData) {
    return (
      <div className={styled.container}>
        <h1>{testQueryData.text}</h1>
        <div className={styled.inputBlock}>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addItemHandler}>ADD</button>
        </div>
        <ul>
          {listQueryData.map((item) => (
            <li key={item.id}>
              <span>{item.title}</span>
              <button onClick={() => deleteHandler(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
};
