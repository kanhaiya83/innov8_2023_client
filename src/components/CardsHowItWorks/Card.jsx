import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const card = (item) => {
  console.log(item);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1.5]);

  const cardVariants = "";
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      key={item.step}
      className="bg-black flex items-center gap-12 rounded-3xl sticky flex-col md:flex-row shadow-xl  top-[25vh] w-[400px] sm:w-[600px] lg:w-[900px] overflow-hidden p-4 md:py-12 scale:75 sm:scale-90 md:scale:100  "
    >
      <div className=" bg-transparent  md:items-start md:justify-start flex flex-col gap-4 text-left w-full md:w-[40%] ">
        <div className=" text-2xl  lg:text-3xl font-bold">Step {item.step}</div>
        <div className=" text-lg font-base">{item.content}</div>
      </div>
      {/* image  */}
      <div className="card-image w-full md:w-[50%] rounded-xl overflow-hidden ">
        <img className=" object-contain " src={item.imgUrl} />
      </div>
    </motion.div>
  );
};

export default card;
