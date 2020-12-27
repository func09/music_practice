import * as Tone from "tone";
import { Interval } from "../src/core/Interval";

describe("Parse interval name", () => {
  test.each`
    name      | expectedSize | expectedDegree
    ${"1st"}  | ${0}         | ${1}
    ${"4th"}  | ${5}         | ${4}
    ${"5th"}  | ${7}         | ${5}
    ${"8th"}  | ${12}        | ${8}
    ${"m2nd"} | ${1}         | ${2}
    ${"M2nd"} | ${2}         | ${2}
    ${"m3rd"} | ${3}         | ${3}
    ${"M3rd"} | ${4}         | ${3}
    ${"m6th"} | ${8}         | ${6}
    ${"M6th"} | ${9}         | ${6}
    ${"m7th"} | ${10}        | ${7}
    ${"M7th"} | ${11}        | ${7}
    ${"b5th"} | ${6}         | ${5}
  `(
    "$name: semitoneSize == $expectedSize, degree == $expectedDegree",
    ({ name, expectedSize, expectedDegree }) => {
      const result = Interval.parse(name);
      expect(result.size).toBe(expectedSize);
      expect(result.degree).toBe(expectedDegree);
    }
  );
});

type DegreeName =
  | "1st"
  | "m2nd"
  | "M2nd"
  | "m3rd"
  | "M3rd"
  | "4th"
  | "b5th"
  | "5th"
  | "m6th"
  | "M6th"
  | "m7th"
  | "M7th"
  | "8th";

const DegreeMap: Array<{ degreeName: DegreeName; semitoneSize: number }> = [
  { degreeName: "1st", semitoneSize: 0 },
  { degreeName: "m2nd", semitoneSize: 1 },
  { degreeName: "M2nd", semitoneSize: 2 },
  { degreeName: "m3rd", semitoneSize: 3 },
  { degreeName: "M3rd", semitoneSize: 4 },
  { degreeName: "4th", semitoneSize: 5 },
  { degreeName: "b5th", semitoneSize: 6 },
  { degreeName: "5th", semitoneSize: 7 },
  { degreeName: "m6th", semitoneSize: 8 },
  { degreeName: "M6th", semitoneSize: 9 },
  { degreeName: "m7th", semitoneSize: 10 },
  { degreeName: "M7th", semitoneSize: 11 },
  { degreeName: "8th", semitoneSize: 12 },
];

const transposeWithDegree = (
  frequency: any,
  degreeName: DegreeName
): string | null => {
  const degree = DegreeMap.find((item) => {
    return item.degreeName == degreeName;
  });
  if (degree) {
    return Tone.Frequency(frequency)
      .transpose(degree.semitoneSize)
      .toNote();
  } else {
    return null;
  }
};

describe("ToneInterval", () => {
  // See https://www.daxter-music.jp/form/index002.html
  test.each`
    note    | degreeName | expected
    ${"C4"} | ${"1st"}   | ${"C4"}
    ${"C4"} | ${"4th"}   | ${"F4"}
    ${"C4"} | ${"5th"}   | ${"G4"}
    ${"C4"} | ${"8th"}   | ${"C5"}
    ${"C4"} | ${"M2nd"}  | ${"D4"}
    ${"C4"} | ${"M3rd"}  | ${"E4"}
    ${"C4"} | ${"M6th"}  | ${"A4"}
    ${"C4"} | ${"M7th"}  | ${"B4"}
    ${"C4"} | ${"m2nd"}  | ${"C#4"}
    ${"C4"} | ${"m3rd"}  | ${"D#4"}
    ${"C4"} | ${"m6th"}  | ${"G#4"}
    ${"C4"} | ${"m7th"}  | ${"A#4"}
    ${"C4"} | ${"b5th"}  | ${"F#4"}
  `("$note + $degreeName == $expected", ({ note, degreeName, expected }) => {
    expect(transposeWithDegree(note, degreeName)).toBe(expected);
  });
  test.each`
    note    | semitoneSize | expected
    ${"C4"} | ${0}         | ${"C4"}
    ${"C4"} | ${1}         | ${"C#4"}
    ${"C4"} | ${2}         | ${"D4"}
    ${"C4"} | ${3}         | ${"D#4"}
    ${"C4"} | ${4}         | ${"E4"}
    ${"C4"} | ${5}         | ${"F4"}
    ${"C4"} | ${6}         | ${"F#4"}
    ${"C4"} | ${7}         | ${"G4"}
    ${"C4"} | ${8}         | ${"G#4"}
    ${"C4"} | ${9}         | ${"A4"}
    ${"C4"} | ${10}        | ${"A#4"}
    ${"C4"} | ${11}        | ${"B4"}
    ${"C4"} | ${12}        | ${"C5"}
  `(
    "$note + $semitoneSize == $expected",
    ({ note, semitoneSize, expected }) => {
      expect(
        Tone.Frequency(note)
          .transpose(semitoneSize)
          .toNote()
      ).toBe(expected);
    }
  );
});
