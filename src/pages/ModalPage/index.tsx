import { useModalContext } from "@/context/ModalContext";
import styled from "./index.module.scss";

export const ModalPage = () => {
  const { openModal } = useModalContext();
  const article1 =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore doloribus laboriosam quis suscipit? Voluptatem, commodi facere! Sequi totam atque molestias.";
  const article2 =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore doloribus laboriosam quis suscipit? Voluptatem, commodi facere! Sequi totam atque molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore doloribus laboriosam quis suscipit? Voluptatem, commodi facere! Sequi totam atque molestias.";
  return (
    <div className={styled.btn_list}>
      <button onClick={() => openModal(article1)}>Article1</button>
      <button onClick={() => openModal(article2)}>Article2</button>
    </div>
  );
};
