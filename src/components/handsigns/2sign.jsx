import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const sign_2 = new GestureDescription('2');
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
sign_2.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
sign_2.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
sign_2.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
sign_2.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
sign_2.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
sign_2.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
sign_2.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
sign_2.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.70);

//Pinky
sign_2.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
sign_2.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

