import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const sign_9 = new GestureDescription('9');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
sign_9.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.7);
sign_9.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.70);

//Index
sign_9.addCurl(Finger.Index, FingerCurl.HalfCurl, .7);
sign_9.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.70);

//Middle
sign_9.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
sign_9.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

//Ring
sign_9.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
sign_9.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);

//Pinky
sign_9.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
sign_9.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);