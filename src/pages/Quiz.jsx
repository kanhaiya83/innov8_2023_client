import React, { useRef, useState } from "react";
import GestureTrackerWebcam from "../components/GestureTrackerWebcam";
import { Signimage, Signpass } from "../components/handimage";
import { successToast } from "../utils";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

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
const QuizApp = () => {
    let currentSignIdx = 0
    const [showLoader,setLoader] = useState(true)
    const shuffledList = shuffle(Signpass)
    const navigate= useNavigate()
    const handleSuccess=(data)=>{
      document.querySelector(".hint-container").classList.add("hidden")
      document.querySelector("button.hint-btn").textContent = "Show Hint"

      document.querySelector(".hint-container").setAttribute("src",data.src)

        document.querySelector(".text-container h1").textContent = data.alt
        currentSignIdx++
        successToast("Yay! You guessed it right!!")
    }
    const handleLoad = ()=>{
      setLoader(false)
    }
    const handleClose = ()=>{
      navigate("/learn")
    }
    const handleShowHint = (e)=>{
      if(document.querySelector(".hint-container").classList.contains("hidden")){
      document.querySelector(".hint-container").classList.remove("hidden")
      e.target.textContent = "Hide Hint"
      }
      else{
      document.querySelector(".hint-container").classList.add("hidden")
      e.target.textContent = "Show Hint"
      }
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
      <div className="flex-1 bg-slateGreen rounded-2xl p-5 relative">
        {/* <div className="absolute top-6 left-6 w-12 h-12">
        <CountdownCircleTimer
    colors={'#5C8374'}
    key={currentSignIdx}
    size={48}
    strokeWidth={3}
    isPlaying={!showLoader}
    updateInterval={1}
    duration={15}
    />
        </div> */}
            <h1 className="text-2xl font-semibold mb-8 text-center mb-10">Guess the gesture for this letter.</h1>
            <div className="text-container w-[70%] mx-auto mb-10">
                <h1 className="text-[14rem] font-semibold text-center">{shuffledList[0].alt}</h1>
            </div>
            <div className="flex justify-around  items-center w-full">
              <button className="bg-bgColor py-2 px-4 rounded-md hint-btn" onClick={handleShowHint}>Show Hint</button>
              <button className="bg-bgColor py-2 px-4 rounded-md" onClick={handleClose}>Close</button>
            </div>
            <div className="hint-container absolute bottom-5 left-5 w-14 hidden">
              <img src={shuffledList[0].src} alt="" />
            </div>
      </div>
     </div>
     {showLoader && <Loader/>}
    </div>
  );
};

export default QuizApp;
  let currentSignIdx = 0
