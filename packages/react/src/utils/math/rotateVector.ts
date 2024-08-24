import { Vector2 } from "./types";

export function rotateVector(v: Vector2, center: Vector2, angle: number) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const x = v.x - center.x;
  const y = v.y - center.y;
  return new Vector2(
    x * cos - y * sin + center.x,
    x * sin + y * cos + center.y,
  );
}
