import { getContrast } from "./getContrast";
import { RGB } from "./types/RGB";

export function chooseHigherContrast(
  baseColor: RGB,
  color1: RGB,
  color2: RGB,
  bias = 0,
): RGB {
  const contrast1 = getContrast(baseColor, color1);
  const contrast2 = getContrast(baseColor, color2);
  if (contrast1 > contrast2 + bias) {
    return color1;
  }
  return contrast1 > contrast2 ? color1 : color2;
}
