import { expect, test } from "vitest";

import { rgbToHsv } from "./rgbToHsv";

test("RGB TO HSV", () => {
  const src = {
    r: 215,
    g: 188,
    b: 255,
  };

  const hsv = rgbToHsv(src);

  expect(hsv).toEqual({
    h: 264.17910447761193,
    s: 0.26274509803921564,
    v: 1,
  });
});
