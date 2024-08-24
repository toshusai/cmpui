import { RGB } from "./types";

export function rgbToCss({ r, g, b }: RGB) {
  return `rgb(${r},${g},${b})`;
}
