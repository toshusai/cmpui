import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  createHandleSVPickerKeyDown,
  createNobPointerDownHandler,
} from "@toshusai/cmpui-core";
import { hsvToRgb } from "@toshusai/cmpui-core";
import { rgbToCss } from "@toshusai/cmpui-core";
import { useHighContrastColor } from "@toshusai/cmpui-core";

import { Circle } from "../Circle";
import { ColorLoupe } from "../ColorLoupe";

import { SVCanvas } from "./lib/SVCanvas";

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

  const handleKeyDown = useMemo(
    () =>
      createHandleSVPickerKeyDown({
        saturation,
        value,
        onChange,
      }),
    [saturation, value, onChange],
  );

  const handleFocus = useCallback(() => {
    setIsDown(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsDown(false);
  }, []);

  const handlePointerDown = useMemo(() => {
    return createNobPointerDownHandler({
      height,
      width,
      onChange,
      onDown: () => {
        setIsDown(true);
        props.onStart?.();
      },
      onUp: () => {
        setIsDown(false);
        props.onEnd?.();
      },
      s: saturation,
      v: value,
    });
  }, [onChange, saturation, value, width, height, props.onEnd, props.onStart]);

  const fill = useMemo(
    () => rgbToCss(hsvToRgb({ h: hue, s: saturation, v: value })),
    [hue, saturation, value],
  );

  const hsv = useMemo(
    () => ({ h: hue, s: saturation, v: value }),
    [hue, saturation, value],
  );

  const strokeColor = useHighContrastColor(hsv);

  const nobRef = useRef<HTMLDivElement>(null);

  /**
   * e.currentTarget may not be the same as the underlying e.nativeEvent.currentTarget.
   */
  useEffect(() => {
    if (!nobRef.current) return;
    nobRef.current.addEventListener("pointerdown", handlePointerDown);
    return () => {
      if (!nobRef.current) return;
      nobRef.current.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [handlePointerDown]);

  return (
    <div
      className="cmpui_sv-picker__root"
      tabIndex={0}
      onKeyDown={(e) => handleKeyDown(e.nativeEvent)}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <SVCanvas
        width={width}
        height={height}
        hue={hue}
        onChange={(s, v) => {
          onChange(s, v);
        }}
        onDownChange={setIsDown}
      />

      {showLoupe && isDown && (
        <ColorLoupe nobRadius={nobRadius} x={x} y={y} color={fill} />
      )}
      <Circle
        ref={nobRef}
        className="cmpui_sv-picker__nob"
        fill={fill}
        radius={nobRadius}
        strokeColor={strokeColor}
        strokeWidth={2}
        x={x}
        y={y}
      />
    </div>
  );
}
