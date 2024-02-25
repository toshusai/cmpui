import { useCallback, useMemo, useState } from "react";
import { useTouchStartPrevent } from "../..";
import { hsvToRgb } from "../../utils/colors/hsvToRgb";
import { rgbToCss } from "../../utils/colors/rgbToCss";
import { useHighContrastColor } from "../../utils/colors/useHighContrastColor";
import { createDragHandler } from "../../utils/interactions/createDragHandler";
import { useKeyDownStartEnd } from "../../utils/interactions/useKeyDownStartEnd";
import { degToRad } from "../../utils/math/degToRad";
import { radToDeg } from "../../utils/math/radToDeg";
import { Circle } from "../Circle";
import { ColorLoupe } from "../ColorLoupe";

import "./index.css";

const _360 = 360;

export type HueCircleProps = {
  hue: number;
  size?: number;
  strokeWidth?: number;
  showLoupe?: boolean;
  onHueChange?: (hue: number) => void;
  onStart?: () => void;
  onEnd?: () => void;
};

export function HueCircle({
  strokeWidth = 24,
  size = 192,
  showLoupe = true,
  ...props
}: HueCircleProps) {
  const nobRadius = strokeWidth / 3;
  const radius = size / 2 - strokeWidth / 2;

  const rad = degToRad(props.hue) - Math.PI / 2;
  const x = Math.cos(rad) * radius + size / 2;
  const y = Math.sin(rad) * radius + size / 2;

  const [isDown, setIsDown] = useState(false);
  const updateKeyDown = useKeyDownStartEnd(props.onStart, props.onEnd);

  const handleKeyDown = useMemo(
    () => (e: React.KeyboardEvent) => {
      let sign = 0;
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
        sign = -1;
        updateKeyDown();
      } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
        sign = 1;
        updateKeyDown();
      }

      if (sign !== 0) {
        const signedStep = 1 * sign;
        const value = props.hue + signedStep;
        if (value < 0) {
          props.onHueChange?.(value + _360);
        } else {
          props.onHueChange?.(value);
        }
        e.preventDefault();
      }
    },
    [props.onHueChange, props.hue, updateKeyDown],
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
          const rect = e.currentTarget.getBoundingClientRect();
          const centerX = rect.left + size / 2;
          const centerY = rect.top + size / 2;

          const angle =
            Math.atan2(e.clientY - centerY, e.clientX - centerX) + Math.PI / 2;
          const hue = radToDeg(angle);
          if (hue < 0) {
            props.onHueChange?.(hue + _360);
            return {
              centerX,
              centerY,
            };
          }
          props.onHueChange?.(hue);

          return {
            centerX,
            centerY,
          };
        },
        onMove: (e, ctx) => {
          if (!ctx) return;
          const dx = e.clientX - ctx.centerX;
          const dy = e.clientY - ctx.centerY;
          const angle = Math.atan2(dy, dx) + Math.PI / 2;
          const hue = radToDeg(angle);
          if (hue < 0) {
            props.onHueChange?.(hue + _360);
            return;
          }
          props.onHueChange?.(hue);
        },
        onUp: () => {
          setIsDown(false);
          props.onEnd?.();
        },
      }),
    [props.onHueChange, size, props.onEnd, props.onStart],
  );

  const handlePointerDownNob = useMemo(
    () =>
      createDragHandler({
        onDown: (e) => {
          setIsDown(true);
          const rect = ref.current?.getBoundingClientRect();
          if (!rect) return false;
          const centerX = rect.left + size / 2;
          const centerY = rect.top + size / 2;

          const nobRect = e.currentTarget.getBoundingClientRect();
          const nobCenterX = nobRect.left + nobRect.width / 2;
          const nobCenterY = nobRect.top + nobRect.height / 2;

          e.stopPropagation();

          return {
            centerX,
            centerY,
            offsetX: nobCenterX - e.clientX,
            offsetY: nobCenterY - e.clientY,
          };
        },
        onMove: (e, ctx) => {
          if (!ctx) return;
          const dx = e.clientX - ctx.centerX + ctx.offsetX;
          const dy = e.clientY - ctx.centerY + ctx.offsetY;
          const angle = Math.atan2(dy, dx) + Math.PI / 2;
          const hue = radToDeg(angle);
          if (hue < 0) {
            props.onHueChange?.(hue + _360);
            return;
          }
          props.onHueChange?.(hue);
        },
        onUp: () => {
          setIsDown(false);
        },
      }),
    [props.onHueChange, size],
  );

  const ref = useTouchStartPrevent<HTMLDivElement>();

  const onlyHue = useMemo(() => {
    return {
      h: props.hue,
      s: 1,
      v: 1,
    };
  }, [props.hue]);

  const stroke = useHighContrastColor(onlyHue);

  const fill = useMemo(() => {
    return rgbToCss(hsvToRgb(onlyHue));
  }, [onlyHue]);

  return (
    <div
      className="cmpui_hue-circle__root"
      style={
        {
          "--cmpui-width": `${strokeWidth}px`,
          "--cmpui-size": `${size}px`,
        } as React.CSSProperties
      }
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div
        className="cmpui_hue-circle__hue"
        onPointerDown={handlePointerDown}
        ref={ref}
        style={{
          width: size,
          height: size,
        }}
      />
      <Circle
        x={x}
        y={y}
        radius={nobRadius}
        fill={fill}
        onPointerDown={handlePointerDownNob}
        strokeWidth={2}
        strokeColor={stroke}
        className="cmpui_hue-circle__nob"
      />

      <div className="cmpui_hue-circle__inner" />
      {showLoupe && isDown && (
        <ColorLoupe nobRadius={nobRadius} x={x} y={y} color={fill} />
      )}
    </div>
  );
}
