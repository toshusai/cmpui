import { useMemo } from "react";

import { getHighContrast } from "./getHighContrast";
import { hsvToRgb } from "./hsvToRgb";
import { rgbToCss } from "./rgbToCss";
import { HSV } from "./types";

/**
 * @param bias default value -3 is looking good, no deep reason for this number.
 */
export function useHighContrastColor(hsv: HSV, bias = -3) {
  return useMemo(
    () => rgbToCss(getHighContrast(hsvToRgb(hsv), bias)),
    [hsv, bias],
  );
}
