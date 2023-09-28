import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const OurMission = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInEffect = {
    visible: { opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.5 } },
    hidden: { opacity: 0, y: 75 },
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeInEffect}
      initial="hidden"
      animate={controls}
      className=" h-[150vh]  text-white  flex items-center justify-center"
    >
      <div className=" text-left flex flex-col  justify-center items-center gap-10 ">
        <p className=" text-center text-5xl md:text-6xl lg:text-8xl font-bold">
          Our mission
        </p>
        <p className="text-center text-xl font-base md:w-[50%] w-[70%]">
          Cosign is on a mission to make communication accessible to everyone,
          regardless of their abilities. Our software enables individuals with
          disabilities to learn and express themselves through the beauty of
          sign language.
        </p>
      </div>
    </motion.div>
  );
};

export default OurMission;
