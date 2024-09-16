import { createDragHandler } from "../createDragHandler";
import { Vector2 } from "../math";
import { matrixToCss } from "../matrixToCss";

export const createRotateStyle = (w: number, h: number, scale: Vector2) => {
  return {
    transform: matrixToCss(
      new DOMMatrix()
        .scale(1 / Math.abs(scale.x), 1 / Math.abs(scale.y))
        .translate(w === 1 ? -4 : 4, h === 1 ? -4 : 4),
    ),
    "--size": "16px",
  } as const;
};

export const createRotateHandler = (
  rotation: number,
  onChange: (rotation: number) => void,
  el: HTMLElement,
) => {
  return createDragHandler({
    onDown(e) {
      const rect = el.getBoundingClientRect();
      if (!rect) return;
      const globalCenter = new Vector2(
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
      );

      const globalCursor = new Vector2(e.clientX, e.clientY);
      return {
        startX: e.clientX,
        startY: e.clientY,
        startAngle: rotation,
        globalCenter,
        diffAngle:
          Math.atan2(
            globalCenter.y - globalCursor.y,
            globalCenter.x - globalCursor.x,
          ) -
          Math.PI / 2,
      };
    },
    onMove(e, ctx) {
      if (!ctx) return;
      const deltaX = e.clientX - ctx.globalCenter.x;
      const deltaY = e.clientY - ctx.globalCenter.y;
      const newAngle = Math.atan2(deltaY, deltaX) + Math.PI / 2;
      onChange(newAngle - ctx.diffAngle + ctx.startAngle);
    },
  });
};
