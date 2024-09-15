import { useCallback, useMemo, useState } from "react";
import { blendColors } from "@toshusai/cmpui-core";
import { WHITE } from "@toshusai/cmpui-core";
import { getHighContrast } from "@toshusai/cmpui-core";
import { rgbToCss } from "@toshusai/cmpui-core";
import { rgbaToCss } from "@toshusai/cmpui-core";
import { RGBA } from "@toshusai/cmpui-core";

import { classNames } from "../../utils/classNames";
import { useTouchStartPrevent } from "../..";
import { createDragHandler } from "../../utils/interactions/createDragHandler";
import { useKeyDownStartEnd } from "../../utils/interactions/useKeyDownStartEnd";
import { clamp } from "../../utils/math/clamp";
import { Circle } from "../Circle";
import { ColorLoupe } from "../ColorLoupe";

import "./index.css";

export type ColorSliderProps = {
  value: number;
  children?: React.ReactNode;
  color: RGBA;
  onChange: (value: number) => void;
  bg?: React.ReactNode;
  width?: number;
  height?: number;
  step?: number;
  shiftStep?: number;
  className?: string;
  onStart?: () => void;
  onEnd?: () => void;
};

export function ColorSlider({
  width = 192,
  height = 20,
  step = 0.01,
  shiftStep = 0.1,
  ...props
}: ColorSliderProps) {
  const [isDown, setIsDown] = useState(false);
  const nobRadius = height / 3;

  const updateKeyDown = useKeyDownStartEnd(props.onStart, props.onEnd);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        updateKeyDown();
        const sign = e.key === "ArrowLeft" ? -1 : 1;
        const signedStep = e.shiftKey ? shiftStep * sign : step * sign;
        const alpha = clamp(props.value + signedStep, 0, 1);
        props.onChange(alpha);
        e.preventDefault();
      }
    },
    [props.value, props.onChange, shiftStep, step, updateKeyDown],
  );

  const handleFocus = useCallback(() => {
    setIsDown(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsDown(false);
  }, []);

  const pointerDown = useMemo(
    () =>
      createDragHandler({
        onDown: (e) => {
          props.onStart?.();
          const { left } = e.currentTarget.getBoundingClientRect();

          const x = e.clientX - left;

          const hue = clamp(x / width, 0, 1);

          props.onChange(hue);

          setIsDown(true);

          return {
            startX: e.clientX,
            startY: e.clientY,
            hue: hue,
          };
        },
        onMove: (e, ctx) => {
          if (!ctx) return;
          const dx = e.clientX - ctx.startX;
          const alpha = clamp(ctx.hue + dx / width, 0, 1);
          props.onChange(alpha);
        },
        onUp: () => {
          setIsDown(false);
          props.onEnd?.();
        },
      }),
    [props.onChange, props.onStart, props.onEnd, width],
  );

  const handlePointerDown = createDragHandler({
    onDown: (e) => {
      setIsDown(true);
      e.stopPropagation();
      return {
        startX: e.clientX,
        startY: e.clientY,
        alpha: props.value,
      };
    },
    onMove: (e, ctx) => {
      if (!ctx) return;
      const dx = e.clientX - ctx.startX;
      const alpha = clamp(ctx.alpha + dx / width, 0, 1);
      props.onChange(alpha);
    },
    onUp: () => {
      setIsDown(false);
    },
  });

  const ref = useTouchStartPrevent<HTMLDivElement>();

  const x = props.value * width;
  const y = height / 2;
  const nobRef = useTouchStartPrevent<HTMLDivElement>();
  const color = useMemo(() => {
    return rgbToCss(
      getHighContrast(blendColors(props.color, WHITE, props.color.a)),
    );
  }, [props.color]);
  return (
    <div
      className={classNames(props.className, "cmpui_color-slider__root")}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          width: width,
          height: height,
        }}
        onPointerDown={pointerDown}
        ref={ref}
      >
        <div
          className="alpha-checker-board"
          style={{
            width,
            height,
          }}
        >
          {props.bg}
        </div>

        <Circle
          x={x}
          y={y}
          radius={nobRadius}
          fill="white"
          strokeWidth={2}
          strokeColor={color}
          style={
            {
              "--cmpui-block-size": "4px",
              pointerEvents: "none",
            } as React.CSSProperties
          }
          className="alpha-checker-board"
        />
        <Circle
          x={x}
          y={y}
          radius={nobRadius}
          fill={rgbaToCss(props.color)}
          strokeColor={color}
          strokeWidth={2}
          ref={nobRef}
          onPointerDown={handlePointerDown}
          className="cmpui_color-slider__nob"
        />
      </div>
      {isDown && (
        <>
          <ColorLoupe
            nobRadius={nobRadius}
            x={x}
            y={y}
            color={rgbaToCss(props.color)}
          />
        </>
      )}
    </div>
  );
}
