import React from "react";

const Illustration1 = () => {
  return (
    <div className=" py-12">
      <div className="flex flex-col items-center justify-center ">
        <div className="px-16 md:px-0 text-center text-3xl md:text-5xl font-semibold flex flex-col justify-center items-center gap-2 md:gap-6 py-[25vh]">
          <span>Empowering Communication</span>
          <span>Through Sign Language</span>
        </div>
        {/* Video/ illlustration */}
        <video width="100%" autoPlay>
          <source
            src="https://dl.dropboxusercontent.com/s/frmnn8rvk6p5rjw/Motion_page.mp4?dl=0"
            type="video/mp4"
          />
        </video>{" "}
      </div>
    </div>
  );
};

export default Illustration1;
