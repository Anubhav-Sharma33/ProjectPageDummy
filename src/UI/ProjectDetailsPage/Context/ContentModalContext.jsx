import React, { createContext, useContext, useState } from "react";

export const FormModalContext = createContext({});

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
      <ModalContext.Provider value={{ openModal, closeModal }}>
        {children}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
              {modalContent}
              <button
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </ModalContext.Provider>
    );
  };