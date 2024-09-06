import { CanvasViewTransform } from "./types";

export function zoomView(
  element: HTMLElement,
  clientX: number,
  clientY: number,
  delta: number,
  ctx: {
    view: CanvasViewTransform;
    maxScale?: number;
    minScale?: number;
  },
  onChangeView: (view: CanvasViewTransform) => void
) {
  const { view, maxScale, minScale } = ctx;
  let rate = 1 + delta / 200;

  const rect = element.getBoundingClientRect();
  const parentRect = element.parentElement?.getBoundingClientRect();
  if (!parentRect) return;
  const offsetX = clientX - rect.left;
  const offsetY = clientY - rect.top;

  const NX = offsetX - view.x;
  const NY = offsetY - view.y;

  if (maxScale !== undefined && view.scale * rate > maxScale) {
    rate = maxScale / view.scale;
  } else if (minScale !== undefined && view.scale * rate < minScale) {
    rate = minScale / view.scale;
  }

  onChangeView({
    x: view.x + NX - NX * rate,
    y: view.y + NY - NY * rate,
    scale: view.scale * rate,
  });
}
