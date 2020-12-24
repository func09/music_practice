import * as Tone from "tone";

export default class Guitar {
  stringsSize: number;
  fretsSize: number;
  tunings: Array<string>;

  constructor(
    stringsSize = 6,
    fretsSize = 20,
    tunings = ["E4", "B3", "G3", "D3", "A3", "E2"]
  ) {
    this.stringsSize = stringsSize;
    this.fretsSize = fretsSize;
    this.tunings = tunings;
  }

  getOpenFrequency(stringNo = 0): Tone.FrequencyClass {
    return Tone.Frequency(this.tunings[stringNo]);
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
