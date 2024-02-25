export function getStepPixel(
  pxPerUnit: number,
  minInterval: number,
  step: number[],
  width: number,
  offsetSec = 0,
) {
  const stepI = step.findIndex((s) => s * pxPerUnit > minInterval);
  const stepPx = step[stepI] * pxPerUnit;
  const viewNumber = Math.ceil(width / stepPx);
  const offset = (offsetSec * pxPerUnit) % stepPx;
  if (Number.isNaN(viewNumber)) return [];
  return [...Array(viewNumber + 1).keys()].map((i) => {
    return i * stepPx - offset;
  });
}
