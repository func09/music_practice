import * as Tone from "tone";
import { IntervalName, NoteName } from "../../src/types";
import { Chord, ChordPattern } from "../../src/core/Chord";

describe("Chord", () => {
  describe("コードがメジャー・トライアドの時", () => {
    test.each`
      rootNote | expected
      ${"C4"}  | ${["C4", "E4", "G4"]}
    `(
      "ルート音が $rootNote の時、構成音は $expected であること ",
      ({ rootNote, expected }) => {
        const chord: Chord = new Chord(rootNote, ChordPattern.MajorTriad);
        const notes: Array<string> = chord.notes.map((note) => {
          return note.toNote();
        });

        expect(notes).toEqual(expect.arrayContaining(expected));
      }
    );
  });
  describe("コードがマイナー・トライアドの時", () => {
    test.each`
      rootNote | expected
      ${"C4"}  | ${["C4", "D#4", "G4"]}
    `(
      "ルート音が $rootNote の時、構成音は $expected であること ",
      ({ rootNote, expected }) => {
        const chord: Chord = new Chord(rootNote, ChordPattern.MinorTriad);
        const notes: Array<string> = chord.notes.map((note) => {
          return note.toNote();
        });

        expect(notes).toEqual(expect.arrayContaining(expected));
      }
    );
  });
  describe("コードがセブンスの時", () => {
    test.each`
      rootNote | expected
      ${"C4"}  | ${["C4", "E4", "G4", "A#4"]}
    `(
      "ルート音が $rootNote の時、構成音は $expected であること ",
      ({ rootNote, expected }) => {
        const chord: Chord = new Chord(rootNote, ChordPattern.Sevens);
        const notes: Array<string> = chord.notes.map((note) => {
          return note.toNote();
        });

        expect(notes).toEqual(expect.arrayContaining(expected));
      }
    );
  });
  describe("コードがメジャーセブンスの時", () => {
    test.each`
      rootNote | expected
      ${"C4"}  | ${["C4", "E4", "G4", "B4"]}
    `(
      "ルート音が $rootNote の時、構成音は $expected であること ",
      ({ rootNote, expected }) => {
        const chord: Chord = new Chord(rootNote, ChordPattern.MajorSevens);
        const notes: Array<string> = chord.notes.map((note) => {
          return note.toNote();
        });

        expect(notes).toEqual(expect.arrayContaining(expected));
      }
    );
  });
  describe("コードがマイナーセブンスの時", () => {
    test.each`
      rootNote | expected
      ${"C4"}  | ${["C4", "D#4", "G4", "A#4"]}
    `(
      "ルート音が $rootNote の時、構成音は $expected であること ",
      ({ rootNote, expected }) => {
        const chord: Chord = new Chord(rootNote, ChordPattern.MinorSevens);
        const notes: Array<string> = chord.notes.map((note) => {
          return note.toNote();
        });

        expect(notes).toEqual(expect.arrayContaining(expected));
      }
    );
  });

  describe("コードがマイナーメジャーセブンスの時", () => {
    test.each`
      rootNote | expected
      ${"C4"}  | ${["C4", "D#4", "G4", "B4"]}
    `(
      "ルート音が $rootNote の時、構成音は $expected であること ",
      ({ rootNote, expected }) => {
        const chord: Chord = new Chord(rootNote, ChordPattern.MinorMajorSevens);
        const notes: Array<string> = chord.notes.map((note) => {
          return note.toNote();
        });

        expect(notes).toEqual(expect.arrayContaining(expected));
      }
    );
  });
});
