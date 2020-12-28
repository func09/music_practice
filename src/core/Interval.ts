import { IntervalName, IntervalType } from "../types";
import { IntervalNames, IntervalMap } from "../constraints";
import * as Tone from "tone";

export class Interval {
  static readonly Names = IntervalNames;

  type: IntervalType = "perfect";
  name: IntervalName;
  degree = 1;
  baseSize = 0;

  constructor(name: IntervalName) {
    this.name = name;
    this.parseByName(name);
  }

  static parse(name: IntervalName): Interval {
    return new Interval(name);
  }

  static diffByNotes(
    noteA: Tone.Unit.Note,
    noteB: Tone.Unit.Note
  ): Interval | null {
    if (noteA == "D3" && noteB == "G3") {
      console.log(Tone.Frequency(noteA).toMidi());
      console.log(Tone.Frequency(noteB).toMidi());
    }
    const diff: number = Math.abs(
      Tone.Frequency(noteA).toMidi() - Tone.Frequency(noteB).toMidi()
    );
    const interval = IntervalMap.find((item) => {
      return item.size == diff;
    });
    if (interval) {
      return this.parse(interval.name);
    } else {
      return null;
    }
  }

  get harmonyType(): string {
    switch (this.degree) {
      case 2:
      case 7:
        return "dissonance";
      case 3:
      case 6:
        return "consonant";
      default:
        // 1,4,5,8
        return "perfect";
    }
  }

  get additionalSize(): number {
    switch (this.type) {
      case "augument":
        return 1;
      case "minor":
      case "deminish":
        return -1;
      default:
        return 0;
    }
  }

  get size(): number {
    return this.baseSize + this.additionalSize;
  }

  private parseByName(name: IntervalName) {
    const m: RegExpMatchArray | null = name.match(/^(#|b|m|M)?([1-8])(\w+)$/);
    if (m) {
      switch (m[1]) {
        case "b":
          this.type = "deminish";
          break;
        case "m":
          this.type = "minor";
          break;
        case "#":
          this.type = "augument";
          break;
        case "M":
          this.type = "major";
          break;
        case "":
          this.type = "perfect";
          break;
      }

      // 度数によって決まる半音の数
      this.degree = Number(m[2]);
      switch (this.degree) {
        case 1:
          this.baseSize = 0;
          break;
        case 2:
          this.baseSize = 2;
          break;
        case 3:
          this.baseSize = 4;
          break;
        case 4:
          this.baseSize = 5;
          break;
        case 5:
          this.baseSize = 7;
          break;
        case 6:
          this.baseSize = 9;
          break;
        case 7:
          this.baseSize = 11;
          break;
        case 8:
          this.baseSize = 12;
          break;
      }
    }
  }
}
