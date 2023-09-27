import React, { useEffect, useRef, useState } from "react";
import { motion, spring, useAnimation, useInView } from "framer-motion";

const IntroductionSection = () => {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef);
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const containerVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };
  const imageVariants = {
    hidden: { rotateY: 180 },
    visible: { rotateY: [90, 0, 0, 0, 90] },
  };
  const imageVariants2 = {
    hidden: { rotateY: 90 },
    visible: { rotateY: [90, 0, 0, 0, -90] },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };
  const [image1, setImage1] = useState(true);

  if (image1 && isInView) {
    setTimeout(() => {
      setImage1(false);
      console.log("showing");
    }, 2500);
  } else {
    setTimeout(() => {
      setImage1(true);
      console.log("not showing");
    }, 2500);
  }

  return (
    <motion.div className=" p-12 pr-16 flex flex-col gap-24 ">
      {/* part 1 */}
      <motion.div
        className="flex flex-col md:flex-row gap-12 relative"
        ref={targetRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
      >
        <motion.div className="flex flex-col gap-12 ">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: 0.5,
              type: "tween",
            }}
            className="text-4xl relative"
          >
            Ready to get more out of work and life?{" "}
          </motion.h1>

          <p>
            Your new go-to. Rolling easier work, rewarding careers, faster pay,
            and everyday savings into the world’s first employment superapp.
          </p>

          <button className=" self-center w-[50%] md:w-[15%] p-2 px-4 text-sm font-semibold bg-darkPurple hover:bg-transparent  hover:z-10 text-white rounded-full   btn btn-fill-purple  hover:text-darkPurple">
            Download
          </button>
        </motion.div>
        <div className=" w-full md:w-[50%]">
          {/* image 1 */}
          {image1 && (
            <motion.img
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 2.5,
                type: "tween",
              }}
              className="rounded-xl"
              src="https://i.pinimg.com/originals/71/9e/80/719e80760999b4c355a723224120eb07.png"
            />
          )}
          {!image1 && (
            <motion.img
              variants={imageVariants2}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 2.5,
                type: "tween",
              }}
              className="rounded-xl"
              src="https://wallpapercave.com/wp/wp5405231.jpg"
            />
          )}
        </div>
      </motion.div>

      {/* part 2 */}
      <motion.div
        className="flex flex-col md:flex-row  gap-12"
        ref={targetRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8, duration: 0.5, ease: "easeIn" }}
      >
        {/* image 2*/}
        <div className=" w-full md:w-[50%]">
          {/* image 1 */}
          {image1 && (
            <motion.img
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 2.5,
                type: "tween",
              }}
              className="rounded-xl"
              src="https://i.pinimg.com/originals/71/9e/80/719e80760999b4c355a723224120eb07.png"
            />
          )}
          {!image1 && (
            <motion.img
              variants={imageVariants2}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 2.5,
                type: "tween",
              }}
              className="rounded-xl"
              src="https://wallpapercave.com/wp/wp5405231.jpg"
            />
          )}
        </div>
        <div className="flex flex-col gap-12 ">
          <h1 className="text-4xl">Ready to get more out of work and life?</h1>

          <p>
            Your new go-to. Rolling easier work, rewarding careers, faster pay,
            and everyday savings into the world’s first employment superapp.
          </p>

          <button className="self-center w-[50%] md:w-[15%] p-2 px-4 text-sm font-semibold bg-darkPurple hover:bg-transparent  hover:z-10 text-white rounded-full   btn btn-fill-purple  hover:text-darkPurple">
            Download
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IntroductionSection;
