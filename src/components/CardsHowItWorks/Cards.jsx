import React, { useRef, useEffect } from "react";
import Card from "./Card";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

const Cards = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const opacityProgress = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.99, 1],
    [0, 1, 1, 0]
  );

  const controls = useAnimation();
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInEffect = {
    visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.5 } },
    hidden: { opacity: 0, y: 75 },
  };

  const cards = [
    {
      step: "1 :  Capture",
      content:
        "Cosign utilizes your device's camera to capture sign language gestures.",
      imgUrl:
        "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      step: "2 : Recognition",
      content:
        "Our powerful algorithms analyze the captured gestures in real-time, converting them into meaningful expressions.",
      imgUrl:
        "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      step: "3 : Feedback and Learning",
      content:
        "Users receive instant feedback, allowing them to refine their signing skills. Cosign also provides a range of learning resources to enhance proficiency.",
      imgUrl:
        "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
  ];

  return (
    <motion.div
      ref={ref}
      variants={fadeInEffect}
      initial="hidden"
      animate={controls}
      style={{ opacity: opacityProgress }}
      className="flex flex-col justify-center  items-center  md:p-24 relative w-full h-[350vh] gap-[50vh]"
    >
      <div className="sticky top-[15vh]  justify-start md:justify-center text-5xl md:text-6xl lg:text-8xl font-bold  ">
        How it works ?
      </div>
      <motion.div className="flex flex-col justify-center  items-center  md:p-24 relative w-full h-[400vh]   gap-[50vh]">
        {/* Cards rendering  */}

        {cards.map((item) => {
          return <Card {...item} key={item.step} />;
        })}
      </motion.div>
    </motion.div>
  );
};

export default Cards;
