import { createDragHandler } from "../createDragHandler";
import { CanvasViewTransform, CanvasViewCursor } from "./types";

export function createPanDragHandler(
  element: HTMLElement,
  view: CanvasViewTransform,
  onChangeView: (view: CanvasViewTransform) => void,
  setCursor?: (cursor: CanvasViewCursor) => void
) {
  return createDragHandler<
    | {
        startX: number;
        startY: number;
        startOSX: number;
        startOSY: number;
      }
    | undefined
  >({
    onDown: (e: PointerEvent) => {
      if (element.style.cursor !== CanvasViewCursor.Grab) return false;
      setCursor?.(CanvasViewCursor.Grabbing);
      return {
        startX: e.clientX,
        startY: e.clientY,
        startOSX: view.x,
        startOSY: view.y,
      };
    },
    onMove: (e, ctx) => {
      if (ctx === undefined) return;
      const deltaX = ctx.startX - e.clientX;
      const deltaY = ctx.startY - e.clientY;

      onChangeView({
        x: ctx.startOSX - deltaX,
        y: ctx.startOSY - deltaY,
        scale: view.scale,
      });
    },
    onUp: () => {
      if (element.style.cursor === CanvasViewCursor.Grabbing) {
        setCursor?.(CanvasViewCursor.Grab);
      } else {
        setCursor?.(CanvasViewCursor.Auto);
      }
    },
  });
}
