import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const phrase_yes = new GestureDescription('Yes');
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
phrase_yes.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
// phrase_yes.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
phrase_yes.addCurl(Finger.Index, FingerCurl.FullCurl, 1)
// phrase_yes.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

//Middle
phrase_yes.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
phrase_yes.addDirection(Finger.Middle, FingerDirection.VerticalDown, 0.7);

//Ring
phrase_yes.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
phrase_yes.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.7);

//Pinky
phrase_yes.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1)
// phrase_yes.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);

