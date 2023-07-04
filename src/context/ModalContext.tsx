import { ReactElement, createContext, useContext, useState } from "react";

type ModalValueType = {
  isOpen: boolean;
  openModal: (text?: string) => void;
  closeModal: () => void;
  content: string;
};

const ModalContext = createContext<ModalValueType>({} as ModalValueType);

export const useModalContext = () => {
  return useContext(ModalContext);
};

export const ModalContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");

  const openModal = (text = "No content") => {
    setIsOpen(true);
    setContent(text);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const value = {
    isOpen,
    openModal,
    closeModal,
    content,
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
