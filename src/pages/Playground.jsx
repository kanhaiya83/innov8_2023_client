import React, { useRef } from 'react'
import GestureTrackerWebcam from '../components/GestureTrackerWebcam'

const Playground = () => {
  const signRef = useRef("A")
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
     <div className="max-w-xl w-full">
      <div className="relative pt-[66%]">
      <GestureTrackerWebcam data={{
        currentSign:signRef.current,
        onSuccess:()=>{alert("Success")},
        onLoad:()=>{console.log("Loaded")}
      }}/>
      </div>
     </div>
    </div>
  )
}

export default Playground