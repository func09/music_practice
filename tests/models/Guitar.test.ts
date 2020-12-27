import * as Guitar from "../../src/models/Guitar";
import { Interval } from "../../src/core/Interval";
import * as Tone from "tone";

describe("Guitar", () => {
  describe("ギターを E2,A2,D3,G3,B3,E4 でチューニングした時", () => {
    const tunings: Array<Tone.Unit.Note> = ["E4", "B3", "G3", "D3", "A2", "E2"];
    //https://www.rittor-music.co.jp/yokuwakaru/classicg01.html#:~:text=in%20your%20browser.-,%E5%90%84%E5%BC%A6%E3%81%AE%E9%9F%B3%E7%A8%8B,1%E5%BC%A6%E3%81%AF%E3%83%9F%E3%81%A7%E3%81%99%E3%80%82
    test.each`
      x    | y    | expected
      ${6} | ${5} | ${"4th"}
      ${5} | ${4} | ${"4th"}
      ${4} | ${3} | ${"4th"}
      ${3} | ${2} | ${"M3rd"}
      ${2} | ${1} | ${"4th"}
    `("$x弦 と $y弦 の音程は $expected である", ({ x, y, expected }) => {
      const interval = Interval.diffByNotes(tunings[x - 1], tunings[y - 1]);
      expect(interval?.name).toBe(expected);
    });
  });
});
