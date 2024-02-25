import { CornerPosition } from "../../../types";

export const positionSignMap: Record<CornerPosition, [number, number]> = {
  "left-top": [-1, -1],
  "right-top": [1, -1],
  "left-bottom": [-1, +1],
  "right-bottom": [1, 1],
};
