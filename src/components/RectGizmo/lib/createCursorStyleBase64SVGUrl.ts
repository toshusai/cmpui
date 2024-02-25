export function createCursorStyleBase64SVGUrl(
  base64: string,
  x: number,
  y: number,
  def: string,
) {
  return `url(data:image/svg+xml;base64,${base64}) ${x} ${y}, ${def}`;
}
