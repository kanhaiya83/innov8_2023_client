import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
const GetStarted = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInEffect = {
    visible: { opacity: 1, y: 0, transition: { delay: 0.75, duration: 0.5 } },
    hidden: { opacity: 0, y: 75 },
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeInEffect}
      initial="hidden"
      animate={controls}
      className="w-full  h-[100vh] text-white  flex items-center justify-center"
    >
      <div className="sticky top-[10vh] flex flex-col gap-14 ">
        <p className="text-center text-4xl md:text-5xl lg:text-8xl font-bold">
          Get Started Today
        </p>
        <p className=" text-center text-lg font-base px-20 md:p-0">
          Ready to experience the future of inclusive communication? <br />
          Sign up for Gesture and embark on a journey where every gesture tells
          a story.
        </p>
        <div className="flex justify-center items-center gap-6">
          {/* add logic >> if not signed in not applicable to learn */}
          <Link to="/learn">
            <button className="p-2 px-4 rounded-xl border-2 border-white hover:bg-white hover:text-black transition hover:ease-in-out hover:scale-125">
              {" "}
              Learn
            </button>
          </Link>
          <Link to="/playground">
            <button className="p-2 px-4 rounded-xl border-2 border-white hover:bg-white hover:text-black transition hover:ease-in-out hover:scale-125">
              {" "}
              Playground
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default GetStarted;
