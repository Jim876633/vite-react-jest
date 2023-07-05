import { useModalContext } from "@/context/ModalContext";
import ReactModal from "react-modal";
import styled from "./index.module.scss";

export const Modal = () => {
  const { isOpen, closeModal, content } = useModalContext();
  return (
    <ReactModal
      isOpen={isOpen}
      overlayClassName={styled.overlay}
      className={styled.modal}
      onRequestClose={closeModal}
      ariaHideApp={false}
    >
      <button
        data-testid='close-btn'
        className={styled.close_btn}
        onClick={closeModal}
      >
        X
      </button>
      {content}
    </ReactModal>
  );
};
