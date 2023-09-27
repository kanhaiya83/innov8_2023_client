import React from "react";

const KeyFeatures = () => {
  const features = [
    {
      featureHeading: "Real-time Recognition",
      featureContent:
        "Our advanced camera-based system accurately interprets sign language in real-time, providing a seamless and natural user experience.",
      featureIcon: "",
    },
    {
      featureHeading: "Personalized Learning",
      featureContent:
        "Tailored lessons and interactive modules cater to individual learning needs, ensuring an effective and enjoyable learning journey.",
      featureIcon: "",
    },
    {
      featureHeading: "Real-time Recognition",
      featureContent:
        "Our advanced camera-based system accurately interprets sign language in real-time, providing a seamless and natural user experience.",
      featureIcon: "",
    },
  ];
  return (
    <div className=" h-[150vh] text-white  flex items-center justify-center">
      <div className=" sticky top-[10vh] flex flex-col gap-16 ">
        <p className=" text-center text-4xl md:text-5xl lg:text-8xl font-bold">
          Why Choose Gesture?
        </p>

        <div className=" px-10 text-md flex flex-col lg:flex-row first-letter:justify-center items-center gap-6 p-4  scale-75 md:scale-100 ">
          {features.map((item) => {
            return (
              <div className="flex items-center justify-center ">
                <div className="rounded-xl border-2 border-white p-6 justify-center items-center flex flex-col gap-3 text-center">
                  <p>Icon</p>
                  <div className="font-bold">{item.featureHeading}</div>
                  <div className="font-base">{item.featureContent}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
