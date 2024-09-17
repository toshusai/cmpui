import { KeyboardKey } from "../KeyboardKey";
import { clamp } from "../math";
import { Orientation } from "./Orientation";

export function createSliderKeyDown(
  e: KeyboardEvent,
  value: number,
  onChange: (value: number) => void,
  step: number,
  min: number,
  max: number,
  orientation: Orientation
) {
  let sign = 0;
  if (e.key === KeyboardKey.ArrowLeft || e.key === KeyboardKey.ArrowDown) {
    sign = -1;
  } else if (
    e.key === KeyboardKey.ArrowRight ||
    e.key === KeyboardKey.ArrowUp
  ) {
    sign = 1;
  }

  if (orientation === Orientation.Vertical) {
    sign *= -1;
  }

  if (sign !== 0) {
    const signedStep = step * sign;
    const newValue = clamp(value + signedStep, min, max);
    onChange(newValue);
    e.preventDefault();
  }
}
