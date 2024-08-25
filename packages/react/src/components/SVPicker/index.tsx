import { useCallback, useMemo, useState } from "react";

import { hsvToRgb } from "../../utils/colors/hsvToRgb";
import { rgbToCss } from "../../utils/colors/rgbToCss";
import { useHighContrastColor } from "../../utils/colors/useHighContrastColor";
import { createDragHandler } from "../../utils/interactions/createDragHandler";
import { useKeyDownStartEnd } from "../../utils/interactions/useKeyDownStartEnd";
import { clamp } from "../../utils/math/clamp";
import { Circle } from "../Circle";
import { ColorLoupe } from "../ColorLoupe";

import { SVCanvas } from "./lib/SVCanvas";

import "./index.css";

export type SVPickerProps = {
  nobRadius?: number;
  onChange: (saturation: number, value: number) => void;
  hue: number;
  saturation?: number;
  showLoupe?: boolean;
  value?: number;
  width?: number;
  height?: number;
  onStart?: () => void;
  onEnd?: () => void;
};

export function SVPicker({
  nobRadius = 8,
  onChange,
  hue,
  saturation = 1,
  showLoupe = true,
  value = 1,
  width = 192,
  height = 192,
  ...props
}: SVPickerProps) {
  const x = saturation * width;
  const y = (1 - value) * height;

  const [isDown, setIsDown] = useState(false);

  const updateKeyDown = useKeyDownStartEnd(props.onStart, props.onEnd);

  const handleKeyDown = useMemo(
    () => (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        updateKeyDown();
        const sign = e.key === "ArrowLeft" ? -1 : 1;
        const signedStep = 0.01 * sign;
        const s = clamp(saturation + signedStep, 0, 1);
        onChange(s, value);
        e.preventDefault();
      } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        updateKeyDown();
        const sign = e.key === "ArrowUp" ? 1 : -1;
        const signedStep = 0.01 * sign;
        const v = clamp(value + signedStep, 0, 1);
        onChange(saturation, v);
        e.preventDefault();
      }
    },
    [saturation, value, onChange, updateKeyDown],
  );

  const handleFocus = useCallback(() => {
    setIsDown(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsDown(false);
  }, []);

  const handlePointerDown = useMemo(
    () =>
      createDragHandler({
        onDown: (e) => {
          setIsDown(true);
          props.onStart?.();
          return {
            startX: e.clientX,
            startY: e.clientY,
            s: saturation,
            v: value,
          };
        },
        onMove: (e, ctx) => {
          if (!ctx) return;
          const dx = e.clientX - ctx.startX;
          const dy = e.clientY - ctx.startY;
          const s = clamp(ctx.s + dx / width, 0, 1);
          const v = clamp(ctx.v - dy / height, 0, 1);
          onChange(s, v);
        },
        onUp: () => {
          setIsDown(false);
          props.onEnd?.();
        },
      }),
    [onChange, saturation, value, width, height, props.onEnd, props.onStart],
  );

  const fill = useMemo(
    () => rgbToCss(hsvToRgb({ h: hue, s: saturation, v: value })),
    [hue, saturation, value],
  );

  const hsv = useMemo(
    () => ({ h: hue, s: saturation, v: value }),
    [hue, saturation, value],
  );

  const strokeColor = useHighContrastColor(hsv);

  return (
    <div
      className="cmpui_sv-picker__root"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <SVCanvas
        width={width}
        height={height}
        hue={hue}
        onChange={onChange}
        onDownChange={setIsDown}
      />

      {showLoupe && isDown && (
        <ColorLoupe nobRadius={nobRadius} x={x} y={y} color={fill} />
      )}
      <Circle
        className="cmpui_sv-picker__nob"
        fill={fill}
        onPointerDown={handlePointerDown}
        radius={nobRadius}
        strokeColor={strokeColor}
        strokeWidth={2}
        x={x}
        y={y}
      />
    </div>
  );
}
