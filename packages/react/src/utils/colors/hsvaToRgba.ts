import { hsvToRgb } from "./hsvToRgb";
import { HSVA } from "./types/HSVA";

export function hsvaToRgba(hsva: HSVA) {
  return { ...hsvToRgb(hsva), a: hsva.a };
}
