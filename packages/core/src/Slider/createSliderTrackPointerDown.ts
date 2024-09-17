import { createDragHandler } from "../createDragHandler";
import { clamp } from "../math";
import { Direction, Orientation } from "./Orientation";

function createChangeValueEventHandler(
  onChange: (value: number) => void,
  min: number,
  max: number,
  orientation: Orientation,
  direction: Direction
) {
  return (e: PointerEvent) => {
    const length = max - min;
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();

    let value: number;

    if (orientation === Orientation.Vertical) {
      value = ((e.clientY - rect.top) / rect.height) * length + min;
    } else {
      value = ((e.clientX - rect.left) / rect.width) * length + min;
    }

    if (direction === Direction.RTL) {
      value = max - value + min;
    }

    onChange(clamp(value, min, max));
  };
}

export function createSliderTrackPointerDown(
  onChange: (value: number) => void,
  min: number,
  max: number,
  orientation: Orientation,
  direction: Direction
) {
  return createDragHandler({
    onDown: createChangeValueEventHandler(
      onChange,
      min,
      max,
      orientation,
      direction
    ),
    onMove: createChangeValueEventHandler(
      onChange,
      min,
      max,
      orientation,
      direction
    ),
  });
}
