import { IntervalName, IntervalType } from "../types";

export const NotePrefix: Array<string> = ["C", "D", "E", "F", "G", "A", "B"];

export const Tone12: Array<string> = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "E#",
  "F",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

export const IntervalNames: Array<IntervalName> = [
  "1st",
  "4th",
  "5th",
  "8th",
  "M2nd",
  "m2nd",
  "M3rd",
  "m3rd",
  "M6th",
  "m6th",
  "M7th",
  "m7th",
  // "b1th",
  // "b2th",
  // "b3th",
  // "b4th",
  // "b5th",
  // "b6th",
  // "b7th",
  // "b8th",
  // "#1th",
  // "#2th",
  // "#3th",
  // "#4th",
  // "#5th",
  // "#6th",
  // "#7th",
  // "#8th",
];

export const IntervalTypes: Array<IntervalType> = [
  "perfect",
  "minor",
  "major",
  "deminish",
  "augument",
];

export const IntervalMap: Array<{
  name: IntervalName;
  size: number;
}> = [
  { name: "1st", size: 0 },
  { name: "m2nd", size: 1 },
  { name: "M2nd", size: 2 },
  { name: "m3rd", size: 3 },
  { name: "M3rd", size: 4 },
  { name: "4th", size: 5 },
  { name: "b5th", size: 6 },
  { name: "5th", size: 7 },
  { name: "m6th", size: 8 },
  { name: "M6th", size: 9 },
  { name: "m7th", size: 10 },
  { name: "M7th", size: 11 },
  { name: "8th", size: 12 },
];
