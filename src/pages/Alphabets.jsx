import React, { useRef, useState } from "react";
import GestureTrackerWebcam from "../components/GestureTrackerWebcam";
import { Signpass } from "../components/handimage";
import { successToast } from "../utils";
import Loader from "../components/Loader";
const getRandomSign=()=>{
    return  Signpass[Math.round(Math.random()*(Signpass.length-1))]
}
const Alphabets = () => {
    const initialSign = getRandomSign()
    const [showLoader,setLoader] = useState(true)
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
  return (
    <div className="w-full min-h-screen px-[10%]">
        <h1 className="text-4xl font-semibold text-center">Guess the letter.</h1>
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
                setLoader(false)
              },
            }}
          />
        </div>
      </div>
      <div className="flex-1 bg-slateGreen rounded-2xl p-5">
            <h1 className="text-4xl font-bold mb-8">Form this gesture.</h1>
            <div className="img-container w-full">
                <img src={initialSign.src} alt="" className="w-full" />
            </div>
      </div>
     </div>
     {showLoader && <Loader/>}
    </div>
  );
};

export default Alphabets;
