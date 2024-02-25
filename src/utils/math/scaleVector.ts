import { Vector2 } from "./types";

export function scaleVector(v: Vector2, scale: Vector2, center: Vector2) {
  const delta = new Vector2(v.x - center.x, v.y - center.y);
  delta.x *= scale.x;
  delta.y *= scale.y;
  return new Vector2(center.x + delta.x, center.y + delta.y);
}
