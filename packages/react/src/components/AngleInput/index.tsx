import { useRef } from "react";

import { createDragHandler } from "../../utils/interactions/createDragHandler";
import { Circle } from "../Circle";
import { Line } from "../Line";

import "./index.css";

export type AngleInputProps = {
  value: number;
  nobRadius?: number;
  onChange?: (value: number) => void;
  radius?: number;
  step?: number;
};

export function AngleInput({
  radius = 32,
  step = 12,
  nobRadius = 8,
  ...props
}: AngleInputProps) {
  const diameter = radius * 2;
  const x = Math.cos(props.value) * (radius - 2);
  const y = Math.sin(props.value) * (radius - 2);
  const ref = useRef<HTMLDivElement>(null);

  const nobRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = createDragHandler({
    onDown: (e) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      if (!nobRef.current) return;
      nobRef.current.style.cursor = "grabbing";

      const nobRect = nobRef.current.getBoundingClientRect();
      const nobCenterX = nobRect.left + nobRect.width / 2;
      const nobCenterY = nobRect.top + nobRect.height / 2;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
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

      const angle = Math.atan2(dy, dx);
      props.onChange?.(angle);
    },
    onUp: () => {
      if (!nobRef.current) return;
      nobRef.current.style.cursor = "grab";
    },
  });

  const handlePointerDownRoot = createDragHandler({
    onDown: (e) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      props.onChange?.(angle);
      return {
        centerX,
        centerY,
      };
    },
    onMove: (e, ctx) => {
      if (!ctx) return;
      const dx = e.clientX - ctx.centerX;
      const dy = e.clientY - ctx.centerY;
      const angle = Math.atan2(dy, dx);
      props.onChange?.(angle);
    },
  });

  return (
    <div
      className="cmpui_angle-input__root"
      onPointerDown={handlePointerDownRoot}
      ref={ref}
      style={{
        width: diameter,
        height: diameter,
      }}
    >
      <svg
        width={diameter}
        height={diameter}
        viewBox={`0 0 ${diameter} ${diameter}`}
      >
        <circle
          cx={radius}
          cy={radius}
          r={radius - 1}
          stroke="var(--cmpui-border-color)"
          fill="none"
          strokeWidth={1}
        />
      </svg>
      {Array.from({ length: step }).map((_, i) => {
        const angle = (i * Math.PI) / (step / 2);
        const x = Math.cos(angle) * (radius - 4);
        const y = Math.sin(angle) * (radius - 4);
        const x1 = Math.cos(angle) * (radius - 8);
        const y1 = Math.sin(angle) * (radius - 8);
        return (
          <Line
            key={i}
            x1={x1 + radius}
            y1={y1 + radius}
            x2={x + radius}
            y2={y + radius}
            strokeWidth={1}
            stroke="var(--cmpui-border-color)"
          />
        );
      })}
      <Line
        x1={radius}
        y1={radius}
        x2={x + radius}
        y2={y + radius}
        strokeWidth={1}
        stroke="var(--cmpui-primary-color)"
      />
      <Circle
        ref={nobRef}
        x={x + radius}
        y={y + radius}
        onPointerDown={handlePointerDown}
        radius={nobRadius}
        className="cmpui_angle-input__nob"
      />
      <Circle
        x={radius}
        y={radius}
        radius={2}
        strokeColor="transparent"
        fill="var(--cmpui-primary-color)"
      />
    </div>
  );
}
