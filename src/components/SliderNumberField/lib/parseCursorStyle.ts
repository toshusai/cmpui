export function parseCursorStyle(cursor: string) {
  const match = new RegExp(/^url\("(.*)"\) ([0-9]+) ([0-9]+)/);
  const result = match.exec(cursor);
  if (result) {
    return {
      src: result[1],
      x: Number(result[2]),
      y: Number(result[3]),
    };
  }
  return null;
}
