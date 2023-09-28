import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/image.jpeg";

const Illustration1 = () => {
  const fadeInEffect = {
    hidden: { opacity: 0, y: "10vh" },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } },
  };

  return (
    <div className=" py-6">
      <div className="flex flex-col items-center justify-top ">
        <motion.div
          variants={fadeInEffect}
          initial="hidden"
          animate="visible"
          className="px-16 md:px-0 text-center text-3xl md:text-5xl font-semibold flex flex-col justify-center items-center gap-2 md:gap-6 py-16"
        >
          <span>Empowering Communication</span>
          <span>Through Sign Language</span>
        </motion.div>
        {/* Video/ illlustration */}
        {/* <video width="100%" autoPlay>
          <source
            src="https://dl.dropboxusercontent.com/s/frmnn8rvk6p5rjw/Motion_page.mp4?dl=0"
            type="video/mp4"
          />
        </video>{" "} */}
        <img src={"/home.gif"} className="w-[60%] rounded-3xl" />
      </div>
    </div>
  );
};

export default Illustration1;
