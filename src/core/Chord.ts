import { NoteName, IntervalName } from "../types";
import { Interval } from "./Interval";
import * as Tone from "tone";

export const ChordPattern: { [name: string]: Array<IntervalName> } = {
  MajorTriad: ["1st", "M3rd", "5th"],
  MinorTriad: ["1st", "m3rd", "5th"],
  Sevens: ["1st", "M3rd", "5th", "m7th"],
  MajorSevens: ["1st", "M3rd", "5th", "M7th"],
  MinorSevens: ["1st", "m3rd", "5th", "m7th"],
  MinorMajorSevens: ["1st", "m3rd", "5th", "M7th"],
};

export class Chord {
  rootNote: NoteName;
  intervals: Array<IntervalName>;

  constructor(rootNote: NoteName, intervals: Array<IntervalName>) {
    this.rootNote = rootNote;
    this.intervals = intervals;
  }

  // コードの構成音の配列を返す
  get notes(): Array<Tone.FrequencyClass> {
    const _intervals: Array<number> = this.intervals.map((intervalName) => {
      return Interval.parse(intervalName).size;
    });
    return Tone.Frequency(this.rootNote).harmonize(_intervals);
  }
}
