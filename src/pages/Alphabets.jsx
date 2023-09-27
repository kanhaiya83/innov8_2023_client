import React, { useRef } from "react";
import GestureTrackerWebcam from "../components/GestureTrackerWebcam";

const Alphabets = () => {
    const signRef = useRef("A")

  return (
    <div className="w-full min-h-screen px-[10%]">
     <div className="flex gap-x-[5%] w-full mt-[10vh]">
     <div className="flex-[2]">
        <div className="relative pt-[66%] rounded-2xl overflow-hidden">
          <GestureTrackerWebcam
            data={{
              currentSign: signRef.current,
              onSuccess: () => {
                alert("Success");
              },
              onLoad: () => {
                console.log("Loaded");
              },
            }}
          />
        </div>
      </div>
      <div className="flex-1 bg-red-200 rounded-2xl">

      </div>
     </div>
    </div>
  );
};

export default Alphabets;
