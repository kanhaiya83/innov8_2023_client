import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const sign_5 = new GestureDescription('5');
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
sign_5.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
// sign_5.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
sign_5.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
sign_5.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

//Middle
sign_5.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
sign_5.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

//Ring
sign_5.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
sign_5.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1);

//Pinky
sign_5.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
sign_5.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1);

