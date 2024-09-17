import { useCallback, useRef } from "react";
import {
  createSliderStyles,
  Orientation,
  createSliderKeyDown,
  createSlider,
  createSliderTrackPointerDown,
  Direction,
} from "@toshusai/cmpui-core";

export type SliderProps = {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  orientation?: Orientation;
  direction?: Direction;

  onChange: (value: number) => void;
};

export function Slider({
  min = 0,
  max = 1,
  step = 0.01,
  orientation = Orientation.Horizontal,
  direction = Direction.LTR,
  ...props
}: SliderProps) {
  const ref = useRef<HTMLDivElement>(null);

  const length = max - min;

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      return createSliderKeyDown(
        // hack for e.currentTarget
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        e as KeyboardEvent,
        props.value,
        props.onChange,
        step,
        min,
        max,
        orientation,
      );
    },
    [props.onChange, orientation, props.value, step, min, max],
  );

  const handlePointerDownNob = useCallback(
    (e: React.PointerEvent) =>
      createSlider(
        props.value,
        props.onChange,
        min,
        max,
        orientation,
        direction,
      )(
        // hack for e.currentTarget
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        e as PointerEvent,
      ),
    [props.onChange, orientation, min, max, length, props.value, direction],
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) =>
      createSliderTrackPointerDown(
        props.onChange,
        min,
        max,
        orientation,
        direction,
        // hack for e.currentTarget
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
      )(e as PointerEvent),
    [props.onChange, orientation, min, max, length, direction],
  );

  const { rangeStyle, nobStyle } = createSliderStyles(
    props.value,
    min,
    max,
    orientation,
    direction,
  );

  return (
    <>
      <div
        ref={ref}
        onPointerDown={handlePointerDown}
        className="cmpui_slider__root"
        data-orientation={orientation}
        dir={direction}
        aria-disabled={props.disabled}
      >
        <div className="cmpui_slider__track" data-orientation={orientation}>
          <div
            data-orientation={orientation}
            className="cmpui_slider__range"
            style={rangeStyle}
          />
        </div>
        <div
          tabIndex={props.disabled ? -1 : 0}
          onKeyDown={handleKeyDown}
          data-orientation={orientation}
          onPointerDown={handlePointerDownNob}
          className="cmpui_slider__nob"
          style={nobStyle}
        />
      </div>
    </>
  );
}
