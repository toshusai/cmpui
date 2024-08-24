import { RGB } from "./types/RGB";

export function blendColors(
  foregroundColor: RGB,
  backgroundColor: RGB,
  alpha: number,
): RGB {
  return {
    r: Math.round(foregroundColor.r * alpha + backgroundColor.r * (1 - alpha)),
    g: Math.round(foregroundColor.g * alpha + backgroundColor.g * (1 - alpha)),
    b: Math.round(foregroundColor.b * alpha + backgroundColor.b * (1 - alpha)),
  };
}
