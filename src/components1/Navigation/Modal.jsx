import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import Menu from "./Menu";

const Modal = ({ showModal, setShowModal, setShowMenu, showMenu }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const handleClose = () => {
    setShowMenu(false);
    setShowModal(false);
  };

  return (
    <AnimatePresence wait>
      {showModal && (
        <motion.div
          className="backdrop flex items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleClose}
        >
          {showMenu && <Menu handleClose={handleClose} showMenu={showMenu} />}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
