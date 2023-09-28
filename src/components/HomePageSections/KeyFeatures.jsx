import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const KeyFeatures = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInEffect = {
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } },
    hidden: { opacity: 0, y: 75 },
  };

  const fadeInEffectdelayed = {
    hidden: { opacity: 0, y: "10vh" },
    visible: { opacity: 1, y: 0, transition: { delay: 0.75, duration: 0.5 } },
  };

  const svgVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { delay: 0.5, duration: 0.5 },
    },
  };
  const features = [
    {
      featureHeading: "Real-time Recognition",
      featureContent:
        "Our advanced camera-based system accurately interprets sign language in real-time, providing a seamless and natural user experience.",
      featureIconDValue:
        "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z",
    },
    {
      featureHeading: "Personalized Learning",
      featureContent:
        "Tailored lessons and interactive modules cater to individual learning needs, ensuring an effective and enjoyable learning journey.",
      featureIconDValue:
        "M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z",
    },
    {
      featureHeading: "Accessibility Matters",
      featureContent:
        "Cosign is designed with accessibility at its core. Our user-friendly interface and customizable settings make it easy for users of all abilities to navigate and use the platform effortlessly.",
      featureIconDValue:
        "M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm161.5-86.1c-12.2-5.2-26.3 .4-31.5 12.6s.4 26.3 12.6 31.5l11.9 5.1c17.3 7.4 35.2 12.9 53.6 16.3v50.1c0 4.3-.7 8.6-2.1 12.6l-28.7 86.1c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l24.4-73.2c1.3-3.8 4.8-6.4 8.8-6.4s7.6 2.6 8.8 6.4l24.4 73.2c4.2 12.6 17.8 19.4 30.4 15.2s19.4-17.8 15.2-30.4l-28.7-86.1c-1.4-4.1-2.1-8.3-2.1-12.6V235.5c18.4-3.5 36.3-8.9 53.6-16.3l11.9-5.1c12.2-5.2 17.8-19.3 12.6-31.5s-19.3-17.8-31.5-12.6L338.7 175c-26.1 11.2-54.2 17-82.7 17s-56.5-5.8-82.7-17l-11.9-5.1zM256 160a40 40 0 1 0 0-80 40 40 0 1 0 0 80z",
    },
  ];
  return (
    <motion.div
      ref={ref}
      variants={fadeInEffect}
      initial="hidden"
      animate={controls}
      className=" h-[180vh] text-white  flex items-center justify-center"
    >
      <div className=" sticky top-[10vh] flex flex-col gap-16 ">
        <p className=" text-center text-4xl md:text-5xl lg:text-8xl font-bold">
          Why Choose Cosign?
        </p>

        <div className=" px-10 md:px-32 text-md flex flex-col lg:flex-row first-letter:justify-center items-center gap-6 p-4  scale-75 md:scale-100 ">
          {features.map((item) => {
            return (
              <motion.div
                variants={fadeInEffectdelayed}
                initial="hidden"
                animate={controls}
                key={item.featureHeading}
                className="flex items-center justify-center "
              >
                <div className="rounded-xl border-2 border-white p-6 justify-center items-center flex flex-col gap-3 text-center h-[400px] w-[400px]">
                  <div className="p-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-white h-[5rem]"
                      viewBox="0 0 512 512"
                    >
                      <motion.path
                        variants={svgVariants}
                        initial="hidden"
                        animate="visible"
                        d={item.featureIconDValue}
                      />
                    </svg>
                  </div>
                  <div className="font-bold">{item.featureHeading}</div>
                  <div className="font-base">{item.featureContent}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default KeyFeatures;
