import * as Tone from "tone";
import _ from "lodash";

export default class Guitar {
  stringsSize: number;
  fretsSize: number;
  tunings: Array<string>;

  constructor(
    stringsSize = 6,
    fretsSize = 20,
    tunings = ["E4", "B3", "G3", "D3", "A2", "E2"]
  ) {
    this.stringsSize = stringsSize;
    this.fretsSize = fretsSize;
    this.tunings = tunings;
  }

  getOpenFrequency(stringNo = 0): Tone.FrequencyClass {
    return Tone.Frequency(this.tunings[stringNo]);
  }

  getFret(stringNo = 0, fretNo = 0) {
    return this.frets.find((fret) => {
      return fret.stringNo == stringNo && fret.fretNo == fretNo;
    });
  }

  get stringNos(): Array<number> {
    return [...Array(this.stringsSize)].map((item, index) => {
      return index;
    });
  }

  get fretNos(): Array<number> {
    return [...Array(this.fretsSize)].map((item, index) => {
      return index;
    });
  }

  get strings() {
    return _.groupBy(_.sortBy(this.frets, ["stringNo", "fretNo"]), "stringNo");
  }

  get frets() {
    const _ = [];
    for (let sNum = 0; sNum < this.stringsSize; sNum++) {
      const openFrequency: Tone.FrequencyClass = this.getOpenFrequency(sNum);
      for (let fNum = 0; fNum < this.fretsSize + 1; fNum++) {
        const fretFrequency: Tone.FrequencyClass = openFrequency.transpose(
          fNum
        );
        _.push({
          name: `${sNum}.${fNum}`,
          stringNo: sNum,
          fretNo: fNum,
          note: fretFrequency.toNote(),
          frequency: fretFrequency.toFrequency(),
        });
      }
    }
    return _;
  }
}
