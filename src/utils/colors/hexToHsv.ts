import { hexToRgba } from "./hexToRgba";
import { rgbToHsv } from "./rgbToHsv";
import { HSVA } from "./types/HSVA";

export function hexToHsv(hex: string): HSVA {
  const rgb = hexToRgba(hex);
  return { ...rgbToHsv(rgb), a: rgb.a };
}
