import { chooseHigherContrast } from "./chooseHigherContrast";
import { HIGH_COLOR, LOW_COLOR } from "./const";
import { RGB } from "./types/RGB";

export function getHighContrast(rgb: RGB, bias = 0): RGB {
  return chooseHigherContrast(rgb, HIGH_COLOR, LOW_COLOR, bias);
}
