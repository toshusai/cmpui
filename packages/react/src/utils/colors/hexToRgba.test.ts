import { expect, test } from "vitest";
import { hexToRgba } from "./hexToRgba";

test("HEX to RGB", () => {
  const src = "#d7bcff";

  const hsv = hexToRgba(src);

  expect(hsv).toEqual({
    r: 215,
    g: 188,
    b: 255,
    a: 1,
  });
});
