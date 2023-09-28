import React, { useRef, useState } from "react";
import GestureTrackerWebcam from "../components/GestureTrackerWebcam";
import { Signpass } from "../components/handimage";
import { successToast } from "../utils";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
const getRandomSign=()=>{
    return  Signpass[Math.round(Math.random()*(Signpass.length-1))]
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
const Alphabets = () => {
    const [showLoader,setLoader] = useState(true)
    const shuffledList = shuffle(Signpass)
    const navigate= useNavigate()
    const handleSuccess=(data)=>{
        document.querySelector(".img-container img").setAttribute("src",data.src)
        successToast("Yay! You guessed it right!!")
    }
    const handleLoad = ()=>{
      // setLoader(false)
      document.querySelector(".loader").classList.add("hidden")
    }
    const handleClose = ()=>{
      navigate("/learn")
    }
    const handleSkip = ()=>{
      window.currentSign+=1

      document.querySelector(".img-container img").setAttribute("src",shuffledList[window.currentSign].src)
    }
  return (
    <div className="w-full min-h-screen px-[10%] pt-12">
        <h1 className="text-4xl font-semibold text-center mb-10">Guess the letter.</h1>
     <div className="flex gap-x-[5%] w-full pt-6">

     <div className="flex-[2]">
        <div className="relative pt-[66%] rounded-2xl overflow-hidden">
          <GestureTrackerWebcam
            data={{
              signList:shuffledList,
              onSuccess: 
                handleSuccess,
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
                <img src={shuffledList[0].src} alt="" className="w-full" />
            </div>
            <div className="flex justify-around  items-center w-full">
              <button className="bg-bgColor py-2 px-4 rounded-md" onClick={handleSkip}>Skip</button>
              <button className="bg-bgColor py-2 px-4 rounded-md" onClick={handleClose}>Close</button>
            </div>
      </div>
     </div>
      <Loader/>
    </div>
  );
};

export default Alphabets;
