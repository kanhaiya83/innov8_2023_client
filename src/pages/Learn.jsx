import React from "react";
import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <div>
      <div className="text-center text-5xl md:text-6xl lg:text-8xl font-bold">
        Learn Now!
      </div>
      <div className="flex flex-col justify-center items-center p-10 lg:flex-row gap-8">
        {/* Options */}
        <div className="learning-option-card">
          <div className="learning-option-card-image"></div>
          <div className="w-full bg-transparent h-[20%] text-2xl pl-2 font-bold">
            Alphabets
          </div>{" "}
          <Link className="learn-card-button " to="/learn/alphabets">
            <button className="">Start Now!</button>
          </Link>
        </div>
        <div className="learning-option-card">
          <div className="learning-option-card-image"></div>
          <div className="w-full bg-transparent h-[20%] text-2xl pl-2 font-bold">
            Numbers
          </div>{" "}
          <Link className="learn-card-button " to="/learn/numbers">
            <button className="">Start Now!</button>
          </Link>
        </div>
        <div className="learning-option-card">
          <div className="learning-option-card-image"></div>
          <div className="w-full bg-transparent h-[20%] text-2xl pl-2 font-bold">
            Phrases
          </div>{" "}
          <Link className="learn-card-button " to="/learn/phrases">
            <button className="">Start Now!</button>
          </Link>
        </div>
        <div className="learning-option-card">
          <div className="learning-option-card-image"></div>
          <div className="w-full bg-transparent h-[20%] text-2xl pl-2 font-bold">
            Quizzz
          </div>{" "}
          <Link className="learn-card-button " to="/">
            <button className="">Start Now!</button>
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Learn;
