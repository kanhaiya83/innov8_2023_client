import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const sign_8 = new GestureDescription('8');
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
sign_8.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.7);
sign_8.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.70);

//Index
sign_8.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
sign_8.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

//Middle
sign_8.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
sign_8.addDirection(Finger.Middle, FingerDirection.VerticalDown, 0.70);

//Ring
sign_8.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
sign_8.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);

//Pinky
sign_8.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
sign_8.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);