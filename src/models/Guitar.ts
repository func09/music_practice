import * as Tone from "tone";
import { Note, Interval, NoteLiteral } from "@tonaljs/tonal";
import _ from "lodash";

export class GuiterFret {
  stringNo = 1;
  fretNo = 0;
  openTuning: NoteLiteral = "E4";
  note: NoteLiteral = "E4";
  constructor(stringNo: number, fretNo: number, openTuning: NoteLiteral) {
    this.stringNo = stringNo;
    this.fretNo = fretNo;
    this.openTuning = openTuning;
    this.note = Note.transpose(openTuning, Interval.fromSemitones(fretNo));
  }
}

export default class Guitar {
  stringsSize: number;
  fretsSize: number;
  tunings: Array<NoteLiteral>;

  constructor(
    stringsSize = 6,
    fretsSize = 20,
    tunings: Array<NoteLiteral> = ["E4", "B3", "G3", "D3", "A2", "E2"]
  ) {
    this.stringsSize = stringsSize;
    this.fretsSize = fretsSize;
    this.tunings = tunings;
  }

  getFret(stringNo = 1, fretNo = 0) {
    return new GuiterFret(stringNo, fretNo, this.tunings[stringNo - 1]);
  }

  get stringNos(): Array<number> {
    return [...Array(this.stringsSize)].map((item, index) => {
      return index + 1;
    });
  }

  get fretNos(): Array<number> {
    return [...Array(this.fretsSize)].map((item, index) => {
      return index;
    });
  }
}
