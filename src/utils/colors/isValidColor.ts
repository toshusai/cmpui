export function isValidColor(color: string) {
  const s = new Option().style;
  s.color = color;
  return s.color !== "";
}
