import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const sign_4 = new GestureDescription('4');
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
sign_4.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
// sign_4.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
sign_4.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
sign_4.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
sign_4.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
sign_4.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
sign_4.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
sign_4.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.70);

//Pinky
sign_4.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
sign_4.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

