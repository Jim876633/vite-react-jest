import { ModalContext } from "@/context/ModalContext";
import { render } from "@testing-library/react";
import { ReactElement } from "react";

const openModal = jest.fn() as (test?: string) => void;
const closeModal = jest.fn() as () => void;

export const customModalRender = (
  ui: ReactElement,
  isOpen = false,
  content = ""
) => {
  const contextProps = {
    openModal,
    isOpen,
    closeModal,
    content,
  };
  render(
    <ModalContext.Provider value={contextProps}>{ui}</ModalContext.Provider>
  );
  return { isOpen, closeModal, content, openModal };
};
