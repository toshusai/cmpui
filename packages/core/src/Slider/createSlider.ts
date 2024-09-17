import { createDragHandler } from "../interactions/createDragHandler";
import { clamp } from "../math";
import { Direction, Orientation } from "./Orientation";

export function createSlider(
  value: number,
  onChange: (value: number) => void,
  min: number,
  max: number,
  orientation: Orientation,
  direction: Direction
) {
  return createDragHandler({
    onDown: (e) => {
      e.stopPropagation();
      const el = e.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      const directionValue = direction === "rtl" ? max - value : value;
      return {
        offsetX,
        offsetY,
        startX: e.clientX,
        startY: e.clientY,
        value: directionValue,
      };
    },
    onMove: (e, ctx, { dx, dy }) => {
      if (!ctx) return;

      const el = (e.currentTarget as HTMLElement).parentElement!;
      const rect = el.getBoundingClientRect();

      const length = max - min;
      let value: number;

      if (orientation === Orientation.Vertical) {
        value = ctx.value + (dy / rect.height) * length;
      } else {
        value = ctx.value + (dx / rect.width) * length;
      }
      if (direction === Direction.RTL) {
        value = max - value + min;
      }
      onChange(clamp(value, min, max));
    },
  });
}
