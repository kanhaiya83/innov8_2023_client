import React from "react";
import Card from "./Card";

const Cards = () => {
  const cards = [
    {
      step: "1",
      background: "bg-lightPurple",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex dolores eaque voluptate, alias, dignissimos, quas delenitilaudantium non odio vero nesciunt incidunt neque magnam.",
      imgUrl:
        "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      step: "2",
      background: "bg-darkPurple",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex dolores eaque voluptate, alias, dignissimos, quas delenitilaudantium non odio vero nesciunt incidunt neque magnam.",
      imgUrl:
        "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      step: "3",
      background: "bg-lightPurple",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex dolores eaque voluptate, alias, dignissimos, quas delenitilaudantium non odio vero nesciunt incidunt neque magnam.",
      imgUrl:
        "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      step: "4",
      background: "bg-darkPurple",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex dolores eaque voluptate, alias, dignissimos, quas delenitilaudantium non odio vero nesciunt incidunt neque magnam.",
      imgUrl:
        "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      step: "5",
      background: "bg-lightPurple",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex dolores eaque voluptate, alias, dignissimos, quas delenitilaudantium non odio vero nesciunt incidunt neque magnam.",
      imgUrl:
        "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      step: "6",
      background: "bg-darkPurple",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex dolores eaque voluptate, alias, dignissimos, quas delenitilaudantium non odio vero nesciunt incidunt neque magnam.",
      imgUrl:
        "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
  ];

  return (
    <div className="p-10 ">
      <div className="flex flex-col justify-center items-center gap-[55vh] p-24 relative h-[900vh]">
        {/* Card -1  */}

        {cards.map((item) => {
          return <Card {...item} key={item.step} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
