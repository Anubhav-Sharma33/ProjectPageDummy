import { createContext, useState } from "react";
import FormModal from "../FormModal";
export const Context = createContext({});

const ModalContext = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <Context.Provider value={{ isOpen, openModal, closeModal }}>
      {props.children}
      {isOpen && (
        <div className="w-full fixed inset-0 z-50 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm transition-opacity duration-300">
          <FormModal/>
        </div>
      )}
    </Context.Provider>
  );
};

export default ModalContext;
