import { rgbaArrayToRgba } from "./rgbaArrayToRgba";
import { RGBA } from "./types/RGBA";
import { RGBAArray } from "./types/RGBAArray";

export function hexToRgba(hex: string): RGBA {
  if (hex.length === 4 || hex.length === 5) {
    const result = hex
      .substring(1)
      .split("")
      .map((s) => parseInt(s + s, 16)) as RGBAArray;

    if (hex.length === 4) {
      result.push(1);
    } else {
      result[3] = result[3] / 255;
    }
    return rgbaArrayToRgba(result);
  }

  if (hex.length === 7 || hex.length === 9) {
    const result = hex
      .substring(1)
      .match(/.{2}/g)
      ?.map((s) => parseInt(s, 16)) as RGBAArray;

    if (hex.length === 7) {
      result.push(1);
    } else {
      result[3] = result[3] / 255;
    }
    return rgbaArrayToRgba(result);
  }

  return rgbaArrayToRgba([0, 0, 0, 1]);
}
