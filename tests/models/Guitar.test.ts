import * as Guitar from "../../src/models/Guitar";

describe("Guitar", () => {
  describe("ギターを E2,A3,D3,G3,B3,E4 でチューニングした時", () => {
    test.each`
      x    | y    | expected
      ${1} | ${2} | ${"m2nd"}
    `("$x to $y == $expected", ({ x, y, expected }) => {});
  });
});
