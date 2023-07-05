import { useModalContext } from "@/context/ModalContext";
import styled from "./index.module.scss";
import { article1, article2 } from "./data/modal.data";

export const ModalPage = () => {
  const { openModal } = useModalContext();
  return (
    <div className={styled.btn_list}>
      <button onClick={() => openModal(article1)}>Article1</button>
      <button onClick={() => openModal(article2)}>Article2</button>
    </div>
  );
};
