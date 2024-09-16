import { radToDeg } from "../math";

export function createStepped(rotation: number, i: number, offsetRad: number) {
  const deg = radToDeg(rotation + (i * Math.PI) / 2 + offsetRad);
  const posDeg = deg < 0 ? deg + 360 : deg;
  const normalizedDeg = (posDeg % 360) / 360;
  const stepped24 = Math.round(normalizedDeg * 24) * (360 / 24);
  return stepped24;
}
