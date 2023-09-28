import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const sign_6 = new GestureDescription('6');
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
sign_6.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.7);
sign_6.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.70);

//Index
sign_6.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
sign_6.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

//Middle
sign_6.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
sign_6.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

//Ring
sign_6.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
sign_6.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);

//Pinky
sign_6.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.7);
sign_6.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.70);

