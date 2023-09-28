import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-[#040D12]">
      <BallTriangle
        height={200}
        width={200}
        radius={5}
        color="#fff"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
