import { RGBA } from "./types/RGBA";
import { RGBAArray } from "./types/RGBAArray";

export function rgbaArrayToRgba(rgbaArray: RGBAArray): RGBA {
  return {
    r: rgbaArray[0],
    g: rgbaArray[1],
    b: rgbaArray[2],
    a: rgbaArray[3],
  };
}
