import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const phrase_ily = new GestureDescription('I Love You');
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
phrase_ily.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
// phrase_ily.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
phrase_ily.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
phrase_ily.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

//Middle
phrase_ily.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.7);
phrase_ily.addDirection(Finger.Middle, FingerDirection.VerticalDown, 0.7);

//Ring
phrase_ily.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.7);
phrase_ily.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.7);

//Pinky
phrase_ily.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
phrase_ily.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);

