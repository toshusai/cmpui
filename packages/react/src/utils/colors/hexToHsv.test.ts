import { expect, test } from "vitest";

import { hexToHsv } from "./hexToHsv";

test("HEX to HSV", () => {
  const src = "#c649ba";

  const hsv = hexToHsv(src);

  expect(hsv).toEqual({
    h: 305.76,
    s: 0.6313131313131314,
    v: 0.7764705882352941,
    a: 1,
  });
});
