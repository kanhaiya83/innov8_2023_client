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
        "https://img.freepik.com/free-vector/huge-camera-tiny-people-taking-pictures-photographer-with-camera-photos-landscapes-flat-vector-illustration-photography-occupation-concept-banner-website-design-landing-web-page_74855-23089.jpg",
    },
    {
      step: "2 : Recognition",
      content:
        "Our powerful algorithms analyze the captured gestures in real-time, converting them into meaningful expressions.",
      imgUrl:
        "https://media.istockphoto.com/id/1134031844/vector/gesture-recognition-concept-vector-illustration.jpg?s=170667a&w=0&k=20&c=1ohkwzztpMVuEAcwAiRDOiU-26khntT-dfcoA6Kf_fg=",
    },
    {
      step: "3 : Feedback and Learning",
      content:
        "Users receive instant feedback, allowing them to refine their signing skills. Cosign also provides a range of learning resources to enhance proficiency.",
      imgUrl:
        "https://img.freepik.com/free-vector/organic-flat-feedback-concept_23-2148961193.jpg?size=626&ext=jpg&ga=GA1.1.403761969.1695825916&semt=ais",
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
