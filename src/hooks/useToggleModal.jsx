import React from "react";
import ModalProjects from "../pages/ModalProjects";
import { useState } from "react";

const useToggleModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => {
    setIsVisible(true);
  };
  const handleClose = () => {
    setIsVisible(false);
  };
  return {
    isVisible,
    handleClose,
    handleOpen,
  };
};

export default useToggleModal;
