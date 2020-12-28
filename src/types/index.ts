// 音名
// See https://ja.wikipedia.org/wiki/%E9%9F%B3%E5%90%8D%E3%83%BB%E9%9A%8E%E5%90%8D%E8%A1%A8%E8%A8%98
export type PitchNamePrefix = "C" | "D" | "E" | "F" | "G" | "A" | "B";
export type PitchNameSuffix = "#" | "b" | "##" | "bb";
export type Octave = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

// 音程
// https://ja.wikipedia.org/wiki/%E9%9F%B3%E7%A8%8B#%E5%8D%94%E5%92%8C%E9%9F%B3%E7%A8%8B%E3%83%BB%E4%B8%8D%E5%8D%94%E5%92%8C%E9%9F%B3%E7%A8%8B
export type IntervalType =
  | "perfect"
  | "major"
  | "minor"
  | "augument"
  | "deminish";

// 音程名
// See https://ja.wikipedia.org/wiki/%E9%9F%B3%E7%A8%8B#%E9%9F%B3%E7%A8%8B%E5%90%8D
export type IntervalName =
  | "1st"
  | "4th"
  | "5th"
  | "8th"
  | "M2nd"
  | "m2nd"
  | "M3rd"
  | "m3rd"
  | "M6th"
  | "m6th"
  | "M7th"
  | "m7th"
  | "b1th"
  | "b2th"
  | "b3th"
  | "b4th"
  | "b5th"
  | "b6th"
  | "b7th"
  | "b8th"
  | "#1th"
  | "#2th"
  | "#3th"
  | "#4th"
  | "#5th"
  | "#6th"
  | "#7th"
  | "#8th";
