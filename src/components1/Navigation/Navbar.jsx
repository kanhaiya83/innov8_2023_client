import React, { useState } from "react";
import Menu from "./Menu";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ setShowModal, setShowMenu, showModal }) => {
  const handleMenuClick = () => {
    setShowModal(true);
    setShowMenu(true);
  };

  const containerVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5 } },
  };
  return (
    <div className="flex p-6  justify-between w-full ">
      <div className="flex items-center">
        <AnimatePresence>
          {/* Capsule Logo and Menu */}
          {!showModal && (
            <motion.div
              variants={containerVariants}
              className=" flex gap-2 items-center bg-lightPurple p-1 pl-4 rounded-full"
            >
              <div className="text-lg font-extrabold text-darkPurple">
                VoiceCrpyt
              </div>
              <div className="text-sm font-semibold flex items-center justify-center  rounded-full btn btn-fill-white hover:z-10 hover:text-darkPurple bg-darkPurple text-white">
                <button
                  onClick={handleMenuClick}
                  className="p-2 px-4 hover:px-4"
                >
                  Menu
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* p-2 px-4 bg-darkPurple text-white rounded-full flex items-center hover:bg-lightPurple hover:text-darkPurple */}
      {/* Download Button */}
      <div className=" p-2 px-4 text-sm font-semibold bg-darkPurple hover:bg-transparent  hover:z-10 text-white rounded-full flex items-center  btn btn-fill-purple  hover:text-darkPurple">
        Download
      </div>
    </div>
  );
};

export default Navbar;
