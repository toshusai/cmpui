import { useMemo, useRef } from "react";
import { createDragHandler } from "../../utils/interactions/createDragHandler";
import { clamp } from "../../utils/math/clamp";
import "./index.css";

export type SliderProps = {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  orientation?: "horizontal" | "vertical";
  direction?: "ltr" | "rtl";

  onChange: (value: number) => void;
};

export function Slider({
  min = 0,
  max = 1,
  step = 0.01,
  ...props
}: SliderProps) {
  const ref = useRef<HTMLDivElement>(null);

  const length = max - min;

  const handleKeyDown = useMemo(() => {
    return (e: React.KeyboardEvent) => {
      let sign = 0;
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
        sign = -1;
      } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
        sign = 1;
      }

      if (props.orientation === "vertical") {
        sign *= -1;
      }

      if (sign !== 0) {
        const signedStep = step * sign;
        const value = clamp(props.value + signedStep, min, max);
        props.onChange(value);
        e.preventDefault();
      }
    };
  }, [props.onChange, props.orientation, props.value, step, min, max]);

  const handlePointerDownNob = useMemo(
    () =>
      createDragHandler({
        onDown: (e) => {
          e.stopPropagation();
          const rect = e.currentTarget.getBoundingClientRect();
          const offsetX = e.clientX - rect.left;
          const offsetY = e.clientY - rect.top;

          return {
            offsetX,
            offsetY,
            startX: e.clientX,
            startY: e.clientY,
            value: props.value,
          };
        },
        onMove: (e, ctx) => {
          if (!ctx) return;
          const dx = e.clientX - ctx.startX;
          const dy = e.clientY - ctx.startY;

          if (!ref.current) return;
          const rect = ref.current.getBoundingClientRect();

          let value: number;
          if (props.orientation === "vertical") {
            value = ctx.value + (dy / rect.height) * length;
          } else {
            value = ctx.value + (dx / rect.width) * length;
          }
          props.onChange(clamp(value, min, max));
        },
      }),
    [props.onChange, props.orientation, min, max, length, props.value],
  );

  const handlePointerDown = useMemo(
    () =>
      createDragHandler({
        onDown: (e) => {
          const rect = e.currentTarget.getBoundingClientRect();

          const value = ((e.clientX - rect.left) / rect.width) * length + min;

          props.onChange(clamp(value, min, max));

          return {
            startX: e.clientX,
            startY: e.clientY,
          };
        },
        onMove: (e, ctx) => {
          if (!ctx) return;

          if (!ref.current) return;
          const rect = ref.current.getBoundingClientRect();

          let value: number;
          if (props.orientation === "vertical") {
            value = ((e.clientY - rect.top) / rect.height) * length + min;
          } else {
            value = ((e.clientX - rect.left) / rect.width) * length + min;
          }
          props.onChange(clamp(value, min, max));
        },
      }),
    [props.onChange, props.orientation, min, max, length],
  );

  const leftRatio = ((props.value - min) / length) * 100;

  const rangeStyle = useMemo(() => {
    return {
      width:
        props.orientation === "vertical"
          ? "100%"
          : `${props.direction === "rtl" ? 100 - leftRatio : leftRatio}%`,
      height:
        props.orientation === "vertical"
          ? `${props.direction === "rtl" ? 100 - leftRatio : leftRatio}%`
          : "100%",
      top:
        props.orientation === "vertical" && props.direction === "rtl"
          ? `${leftRatio}%`
          : "",
    };
  }, [props.orientation, props.direction, leftRatio]);

  const nobStyle = useMemo(() => {
    return {
      left: props.orientation === "vertical" ? "" : `calc(${leftRatio}% - 8px)`,
      top: props.orientation === "vertical" ? `calc(${leftRatio}% - 8px)` : "",
    };
  }, [props.orientation, leftRatio]);

  return (
    <>
      <div
        ref={ref}
        onPointerDown={handlePointerDown}
        className="cmpui_slider__root"
        data-orientation={props.orientation}
        dir={props.direction}
        aria-disabled={props.disabled}
      >
        <div
          className="cmpui_slider__track"
          data-orientation={props.orientation}
        >
          <div
            data-orientation={props.orientation}
            className="cmpui_slider__range"
            style={rangeStyle}
          />
        </div>
        <div
          tabIndex={0}
          onKeyDown={handleKeyDown}
          data-orientation={props.orientation}
          onPointerDown={handlePointerDownNob}
          className="cmpui_slider__nob"
          aria-label="Volume"
          style={nobStyle}
        />
      </div>
    </>
  );
}
