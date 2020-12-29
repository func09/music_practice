import Guitar from "../../src/models/Guitar";
import { Note, Interval, NoteLiteral } from "@tonaljs/tonal";

describe("Guitar", () => {
  describe("ギターを E2,A2,D3,G3,B3,E4 でチューニングした時", () => {
    const tunings: Array<NoteLiteral> = ["E4", "B3", "G3", "D3", "A2", "E2"];
    //https://www.rittor-music.co.jp/yokuwakaru/classicg01.html#:~:text=in%20your%20browser.-,%E5%90%84%E5%BC%A6%E3%81%AE%E9%9F%B3%E7%A8%8B,1%E5%BC%A6%E3%81%AF%E3%83%9F%E3%81%A7%E3%81%99%E3%80%82
    test.each`
      x    | y    | expected
      ${6} | ${5} | ${"4P"}
      ${5} | ${4} | ${"4P"}
      ${4} | ${3} | ${"4P"}
      ${3} | ${2} | ${"3M"}
      ${2} | ${1} | ${"4P"}
    `("$x弦 と $y弦 の音程は $expected である", ({ x, y, expected }) => {
      expect(Interval.distance(tunings[x - 1], tunings[y - 1])).toBe(expected);
    });

    test.each`
      stringNo | fretNo | expectedNote
      ${5}     | ${0}   | ${"A2"}
      ${5}     | ${3}   | ${"C3"}
    `(
      "$stringNo弦 の $fretNoフレット は $expectedNote である",
      ({ stringNo, fretNo, expectedNote }) => {
        const guiter: Guitar = new Guitar(6, 20, tunings);
        expect(guiter.getFret(stringNo, fretNo).note).toBe(expectedNote);
      }
    );
  });
});
