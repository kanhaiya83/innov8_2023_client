import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const sign_7 = new GestureDescription('7');
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
sign_7.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.7);
sign_7.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.70);

//Index
sign_7.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
sign_7.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
sign_7.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
sign_7.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
sign_7.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.7);
// sign_7.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
sign_7.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
sign_7.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

