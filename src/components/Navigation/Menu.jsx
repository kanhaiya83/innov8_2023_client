import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Menu = ({ handleClose, showMenu }) => {
  const containerVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 1 },
    },
  };

  const buttonVariants = {
    hidden: { x: 0 },
    visible: {
      x: 50,

      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
    exit: { x: 0, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence wait>
      {showMenu && (
        <motion.div
          variants={containerVariants}
          initial="hiidden"
          animate="visible"
          exit={{
            scale: 0.2,
            transition: { duration: 2 },
          }}
          className=" fixed z-10 top-6 left-6 bg-darkPurple flex flex-col gap-6 overflow-hidden rounded-xl p-4 lg:w-[25%] w-[60%]"
        >
          <motion.div
            variants={containerVariants}
            className=" flex gap-2 items-center bg-darkPurple p-1 pl-4 rounded-full"
          >
            <Link to="/" className="text-lg font-extrabold text-lightPurple">
              VoiceCrpyt
            </Link>
            <AnimatePresence>
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                onClick={handleClose}
                exit="exit"
                whileHover="hover"
                className="p-2 px-4 hover:px-4 text-sm font-semibold flex items-center justify-center  rounded-full btn btn-fill-white hover:z-10 bg-white text-darkPurple"
              >
                Close
              </motion.button>
            </AnimatePresence>
          </motion.div>
          <motion.div className="flex flex-col gap-4 pl-4">
            <Link
              to="/"
              className={`navbar-item ${
                location.pathname.includes("/") ? "active" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/main"
              className={`navbar-item ${
                location.pathname.includes("/main") ? "active" : ""
              }`}
            >
              Try Out!
            </Link>
            <Link
              to="/api"
              className={`navbar-item ${
                location.pathname.includes("/api") ? "active" : ""
              }`}
            >
              API Documentation
            </Link>
            <Link
              to="/helpdesk"
              className={`navbar-item ${
                location.pathname.includes("/helpdesk") ? "active" : ""
              }`}
            >
              HelpDesk
            </Link>
            <Link
              to="/support"
              className={`navbar-item ${
                location.pathname.includes("/support") ? "active" : ""
              }`}
            >
              Support
            </Link>
            <Link
              to="/about"
              className={`navbar-item ${
                location.pathname.includes("/about") ? "active" : ""
              }`}
            >
              About
            </Link>
          </motion.div>
          <div className="h-[2px] bg-white"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
