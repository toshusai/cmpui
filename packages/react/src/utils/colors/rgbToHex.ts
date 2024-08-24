import { componentToHex } from "./componentToHex";
import { RGB } from "./types";

export function rgbToHex({ r, g, b }: RGB) {
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}
