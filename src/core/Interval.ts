export type IntervalType =
  | "perfect"
  | "major"
  | "minor"
  | "augument"
  | "deminish";
export type IntervalName =
  | "1st"
  | "4th"
  | "5th"
  | "8th"
  | "M2nd"
  | "m2nd"
  | "M3nd"
  | "m3nd"
  | "M6th"
  | "M7th"
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

class Interval {
  type: IntervalType = "perfect";
  name: IntervalName;
  degree: number = 1;
  baseSize: number = 0;

  constructor(name: IntervalName) {
    this.name = name;
    this.parseByName(name);
  }

  static parse(name: IntervalName): Interval {
    return new Interval(name);
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

export default Interval;