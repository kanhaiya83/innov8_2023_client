import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const sign_1 = new GestureDescription('1');
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
sign_1.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
sign_1.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
sign_1.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
sign_1.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
sign_1.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
sign_1.addDirection(Finger.Middle, FingerDirection.VerticalDown, 0.70);

//Ring
sign_1.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
sign_1.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.70);

//Pinky
sign_1.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
sign_1.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

