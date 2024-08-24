/**
 * cf. https://en.wikipedia.org/wiki/SRGB
 */
export function srgbToLinear(value: number) {
  const v = value / 255;
  return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
}
