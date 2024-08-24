import { HSV, RGB } from "./types";

/**
 *
 * References:
 * - https://gist.github.com/mjackson/5311256
 * - https://en.wikipedia.org/wiki/HSL_and_HSV
 * @param r
 * @param g
 * @param b
 * @returns
 */
export function rgbToHsv(rgb: RGB): HSV {
  const red = rgb.r / 255;
  const green = rgb.g / 255;
  const blue = rgb.b / 255;

  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const value = max;

  const chroma = max - min;
  const saturation = value === 0 ? 0 : chroma / value;

  let hue = 0;
  if (chroma === 0) {
    hue = 0;
  } else {
    switch (value) {
      case red:
        hue = (green - blue) / chroma + (green < blue ? 6 : 0);
        break;
      case green:
        hue = (blue - red) / chroma + 2;
        break;
      case blue:
        hue = (red - green) / chroma + 4;
        break;
    }
    hue /= 6;
  }

  return { h: hue * 360, s: saturation, v: value };
}
