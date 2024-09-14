import { hsvToRgb } from "./hsvToRgb";
import { rgbToHex } from "./rgbToHex";
import { HSVA } from "./types/HSVA";

export function hsvToHex(hsv: HSVA) {
  const rgb = hsvToRgb(hsv);
  return rgbToHex(rgb);
}
