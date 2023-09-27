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
  const opacityProgress = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

  const cardVariants = "";
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      key={item.step}
      className={`  cards flex flex-col md:flex-row  ${item.background} shadow-xl sticky top-[10vh]`}
    >
      <div className="flex flex-col gap-4 text-left w-full md:w-[50%]">
        <div className="text-4xl font-bold">Step {item.step}</div>
        <div className="text-sm font-base">{item.content}</div>
      </div>
      {/* image  */}
      <div className="card-image w-full md:w-[50%] rounded-xl overflow-hidden ">
        <img className=" object-contain " src={item.imgUrl} />
      </div>
    </motion.div>
  );
};

export default card;
