import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import alphabets from "../assets/alphabets.jpg";
import numbers from "../assets/numbers.jpg";
import phrases from "../assets/phrases.png";

const Learn = () => {
  const fadeInEffect = {
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } },
    hidden: { opacity: 0, y: 75 },
  };

  const fadeInEffectdelayed = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.75, duration: 0.5 } },
  };

  return (
    <div>
      <motion.div
        variants={fadeInEffect}
        initial="hidden"
        animate="visible"
        className="text-center text-5xl md:text-6xl lg:text-8xl font-bold"
      >
        Learn Now!
      </motion.div>
      <div className="flex flex-col justify-center items-center p-10 lg:flex-row gap-8">
        {/* Options */}
        <motion.div
          variants={fadeInEffectdelayed}
          initial="hidden"
          animate="visible"
          className="learning-option-card"
        >
          <div className="learning-option-card-image">
            <img src={alphabets} />
          </div>
          <div className="w-full bg-transparent h-[20%] text-2xl pl-2 font-bold">
            Alphabets
          </div>{" "}
          <Link className="learn-card-button " to="/learn/alphabets">
            <button className="">Start Now!</button>
          </Link>
        </motion.div>
        <motion.div
          variants={fadeInEffectdelayed}
          initial="hidden"
          animate="visible"
          className="learning-option-card"
        >
          <div className="learning-option-card-image">
            <img src={numbers} />
          </div>
          <div className="w-full bg-transparent h-[20%] text-2xl pl-2 font-bold">
            Numbers
          </div>{" "}
          <Link className="learn-card-button " to="/learn/numbers">
            <button className="">Start Now!</button>
          </Link>
        </motion.div>
        <motion.div
          variants={fadeInEffectdelayed}
          initial="hidden"
          animate="visible"
          className="learning-option-card"
        >
          <div className="learning-option-card-image">
            <img src={phrases} />
          </div>
          <div className="w-full bg-transparent h-[20%] text-2xl pl-2 font-bold">
            Phrases
          </div>{" "}
          <Link className="learn-card-button " to="/learn/phrases">
            <button className="">Start Now!</button>
          </Link>
        </motion.div>
        <motion.div
          variants={fadeInEffectdelayed}
          initial="hidden"
          animate="visible"
          className="learning-option-card"
        >
          <div className="learning-option-card-image">
            <img src="https://img.freepik.com/free-vector/sign-language-classes-abstract-concept-vector-illustration-study-sign-language-translation-voiceless-basic-communication-silent-speech-online-classes-learn-gesture-alphabet-abstract-metaphor_335657-4230.jpg" />
          </div>
          <div className="w-full bg-transparent h-[20%] text-2xl pl-2 font-bold">
            Quizzz
          </div>{" "}
          <Link className="learn-card-button " to="/learn/quiz">
            <button className="">Start Now!</button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Learn;
