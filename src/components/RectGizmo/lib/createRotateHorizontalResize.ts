import { radToDeg } from "../../../utils/math/radToDeg";
import { createCursorStyleBase64SVGUrl } from "./createCursorStyleBase64SVGUrl";
import { createHorizontalResizeSVGString } from "./createHorizontalResizeSVGString";

export function createRotateHorizontalResize(rad: number) {
  return createCursorStyleBase64SVGUrl(
    btoa(createHorizontalResizeSVGString(radToDeg(rad))),
    8,
    8,
    "ew-resize",
  );
}
