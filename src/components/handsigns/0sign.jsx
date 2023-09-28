import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const sign_0 = new GestureDescription('0');
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
sign_0.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
// sign_0.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
sign_0.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
sign_0.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
sign_0.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
sign_0.addDirection(Finger.Middle, FingerDirection.VerticalDown, 0.70);

//Ring
sign_0.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1);
sign_0.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.70);

//Pinky
sign_0.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1);
sign_0.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 0.70);

