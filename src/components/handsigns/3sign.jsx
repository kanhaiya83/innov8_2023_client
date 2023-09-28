import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const sign_3 = new GestureDescription('3');
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
sign_3.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
// sign_3.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
sign_3.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
sign_3.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
sign_3.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
sign_3.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
sign_3.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
sign_3.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.70);

//Pinky
sign_3.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
sign_3.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

