import { CanvasViewTransform } from "./types";

const defaultOptions = {
  trackPadMoveScaleX: 1,
  trackPadMoveScaleY: 1,
};

export function handleWheelZoom(
  e: WheelEvent,
  view: CanvasViewTransform,
  onChangeView: (view: CanvasViewTransform) => void,
  zoom: (clientX: number, clientY: number, delta: number) => void,
  options?: {
    trackPadMoveScaleX?: number;
    trackPadMoveScaleY?: number;
  }
) {
  if (e.shiftKey) return;
  const finalOptions = { ...defaultOptions, ...options };
  const isTrackpad = Number.isInteger(e.deltaY);
  const isZoom = e.ctrlKey || e.metaKey;

  if (isTrackpad && !isZoom) {
    onChangeView({
      x: view.x - e.deltaX * finalOptions.trackPadMoveScaleX,
      y: view.y - e.deltaY * finalOptions.trackPadMoveScaleY,
      scale: view.scale,
    });
    e.preventDefault();
    return;
  }

  zoom(e.clientX, e.clientY, -e.deltaY);
  e.preventDefault();
}
