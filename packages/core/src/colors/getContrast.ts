import { getLuminance } from "./getLuminance";
import { RGB } from "./types/RGB";

export function getContrast(rgb1: RGB, rgb2: RGB): number {
  const luminance1 = getLuminance(rgb1);
  const luminance2 = getLuminance(rgb2);
  const brightest = Math.max(luminance1, luminance2);
  const darkest = Math.min(luminance1, luminance2);
  return (brightest + 0.05) / (darkest + 0.05);
}
