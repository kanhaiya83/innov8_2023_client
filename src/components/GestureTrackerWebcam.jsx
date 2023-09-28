import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from "../utils";
import * as fp from "fingerpose";
import Handsigns from "./handsigns";
// import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl";
import { useEffect, useRef, useState } from "react";
import useSound from 'use-sound'
import bellSound from './../assets/sounds/bell.wav' // Your sound file path here
const GestureTrackerWebcam = ({data
}) => {
  const {
  onLoad,
  currentSign,
  onSuccess,} = data
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [loader, setLoader] = useState(true);
  const [camState, setCamState] = useState("on");

  const [sign, setSign] = useState(null);
  const [playSound] = useSound(bellSound)

  // let signList = []
  // let currentSign = 0

  let gamestate = "started";

  // let net;

  async function runHandpose() {
    const net = await handpose.load();
    onLoad();
    //   _signList()
    setInterval(() => {
      detect(net);
    }, 150);
  }
  async function detect(net) {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      console.log("object");
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      if (hand.length > 0) {
        //loading the fingerpose model
        const GE = new fp.GestureEstimator([
          fp.Gestures.ThumbsUpGesture,
          Handsigns.aSign,
          Handsigns.bSign,
          Handsigns.cSign,
          Handsigns.dSign,
          Handsigns.eSign,
          Handsigns.fSign,
          Handsigns.gSign,
          Handsigns.hSign,
          Handsigns.iSign,
          Handsigns.jSign,
          Handsigns.kSign,
          Handsigns.lSign,
          Handsigns.mSign,
          Handsigns.nSign,
          Handsigns.oSign,
          Handsigns.pSign,
          Handsigns.qSign,
          Handsigns.rSign,
          Handsigns.sSign,
          Handsigns.tSign,
          Handsigns.uSign,
          Handsigns.vSign,
          Handsigns.wSign,
          Handsigns.xSign,
          Handsigns.ySign,
          Handsigns.zSign,
        ]);

        const estimatedGestures = await GE.estimate(hand[0].landmarks, 6.5);

        if (
          estimatedGestures.gestures !== undefined &&
          estimatedGestures.gestures.length > 0
        ) {
          const confidence = estimatedGestures.gestures.map(
            (p) => p.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(undefined, confidence)
          );

          if (currentSign == estimatedGestures.gestures[maxConfidence].name) {
            onSuccess()
            // playSound()
          }
        }
      }
      // Draw hand lines
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  }

  useEffect(() => {
    runHandpose();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full object-center object-cover">
      <Webcam id="webcam" ref={webcamRef} audio={false}/>
      <canvas id="gesture-canvas" ref={canvasRef} style={{}} />
    </div>
  );
};
export default GestureTrackerWebcam;
