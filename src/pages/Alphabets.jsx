import React, { useRef, useState } from "react";
import GestureTrackerWebcam from "../components/GestureTrackerWebcam";
import { Signpass } from "../components/handimage";
import { successToast } from "../utils";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
const getRandomSign=()=>{
    return  Signpass[Math.round(Math.random()*(Signpass.length-1))]
}

const Alphabets = () => {
    const initialSign = getRandomSign()
    const [showLoader,setLoader] = useState(true)
    const navigate= useNavigate()
    const signRef = useRef(initialSign.alt)
    const handleSuccess=()=>{
        const newSign =getRandomSign()
        signRef.current =newSign.alt
        document.querySelector(".img-container img").setAttribute("src",newSign.src)
        successToast("Yay! You guess it right!!")

    }
    const handleLoad = ()=>{
      setLoader(false)
    }
    const handleClose = ()=>{
      navigate("/learn")
    }
    const handleSkip = ()=>{
      const newSign =getRandomSign()
        signRef.current =newSign.alt
        document.querySelector(".img-container img").setAttribute("src",newSign.src)
    }
  return (
    <div className="w-full min-h-screen px-[10%] pt-12">
        <h1 className="text-4xl font-semibold text-center mb-10">Guess the letter.</h1>
     <div className="flex gap-x-[5%] w-full pt-6">

     <div className="flex-[2]">
        <div className="relative pt-[66%] rounded-2xl overflow-hidden">
          <GestureTrackerWebcam
            data={{
              currentSign: signRef.current,
              onSuccess: () => {
                handleSuccess()
              },
              onLoad: () => {
                handleLoad()
              },
            }}
          />
        </div>
      </div>
      <div className="flex-1 bg-slateGreen rounded-2xl p-5">
            <h1 className="text-2xl font-semibold mb-8 text-center mb-10">Form this gesture.</h1>
            <div className="img-container w-[70%] mx-auto mb-10">
                <img src={initialSign.src} alt="" className="w-full" />
            </div>
            <div className="flex justify-around  items-center w-full">
              <button className="bg-bgColor py-2 px-4 rounded-md" onClick={handleSkip}>Skip</button>
              <button className="bg-bgColor py-2 px-4 rounded-md" onClick={handleClose}>Close</button>
            </div>
      </div>
     </div>
     {showLoader && <Loader/>}
    </div>
  );
};

export default Alphabets;
