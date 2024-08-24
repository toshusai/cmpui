import { srgbToLinear } from "./srgbToLinear";
import { RGB } from "./types/RGB";

/**
 * cf. https://en.wikipedia.org/wiki/Relative_luminance
 */
export function getLuminance(rgb: RGB): number {
  const r = srgbToLinear(rgb.r);
  const g = srgbToLinear(rgb.g);
  const b = srgbToLinear(rgb.b);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
