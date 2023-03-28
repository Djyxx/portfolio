import React from "react";
import ModalProjects from "../pages/ModalProjects";
import { useState } from "react";

const ButtonModal = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button
        className=" bg-[#9ad6a8] text-[#1e1c21] py-2 px-6 mt-4 rounded-full hover:bg-gray-400 "
        onClick={() => setShowModal(true)}
      >
        {props.children}
      </button>
      <ModalProjects
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default ButtonModal;
