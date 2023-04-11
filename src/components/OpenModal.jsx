import React from "react";
import ModalProjects from "../pages/ModalProjects";
import useToggleModal from "../hooks/useToggleModal";

const OpenModal = (props) => {
  const { isVisible, handleOpen, handleClose } = useToggleModal();
  return (
    <div>
      <button
        className="text-[#F6FFF8] bg-[#9ad6a8] text-xl py-4 px-6 mt-4 rounded-full hover:bg-gray-400 "
        onClick={handleOpen}
      >
        {props.children}
      </button>
      <ModalProjects isVisible={isVisible} onClose={handleClose} />
    </div>
  );
};

export default OpenModal;
