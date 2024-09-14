import { RGBA } from ".";

export function rgbaToCss({ r, g, b, a }: RGBA) {
  return `rgba(${r},${g},${b},${a})`;
}
