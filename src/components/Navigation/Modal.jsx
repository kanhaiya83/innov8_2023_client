import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";

const Modal = ({ showModal, setShowModal}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const handleClose = () => {
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
