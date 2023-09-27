import React from "react";
import Card from "./Card";

const Cards = () => {
  const cards = [
    {
      step: "1 :  Capture",
      content:
        "Gesture utilizes your device's camera to capture sign language gestures.",
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
        "Users receive instant feedback, allowing them to refine their signing skills. Gesture also provides a range of learning resources to enhance proficiency.",
      imgUrl:
        "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
  ];

  return (
    <div className="flex flex-col justify-center  items-center gap-[100vh] md:p-24 relative h-[500vh] mb-[50vh] w-full">
      <div className="sticky top-20  justify-start md:justify-center text-5xl md:text-6xl lg:text-8xl font-bold ">
        How it works ?
      </div>
      {/* Cards rendering  */}

      {cards.map((item) => {
        return <Card {...item} key={item.step} />;
      })}
    </div>
  );
};

export default Cards;
