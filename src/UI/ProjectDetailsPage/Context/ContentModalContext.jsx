import React, { createContext, useContext, useState } from "react";
import ContentModal from "../ContentModal";

export const ContentModalContext = createContext({});

export const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
  
    const openModal = (content) => {
      setModalContent(content);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setModalContent(null);
    };
  
    return (
      <ContentModalContext.Provider value={{ openModal, closeModal,setModalContent,modalContent }}>
        {children}
        {isModalOpen && (
          <ContentModal/>
        )}
      </ContentModalContext.Provider>
    );
  };