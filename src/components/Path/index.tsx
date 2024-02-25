import React, { useEffect } from "react";
import { Command } from "../CubicControls/CubicCommand";

export type PathProps = {
  commands: Command[];
  onClickCurve?: (event: React.MouseEvent<SVGPathElement>) => void;
  onChange?: (commands: Command[]) => void;
} & Omit<React.SVGProps<SVGSVGElement>, "onChange">;

export function Path({
  commands,
  onClickCurve,
  onChange,
  ...props
}: PathProps) {
  const ref = React.useRef<SVGSVGElement>(null);
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const offset = 4;

  useEffect(() => {
    if (!ref.current) return;
    const bbox = ref.current.getBBox();
    setX(bbox.x - offset);
    setY(bbox.y - offset);
    setWidth(bbox.width + offset * 2);
    setHeight(bbox.height + offset * 2);
  }, [ref.current, setX, setY, setWidth, setHeight]);

  function commandToD(command: Command[][0]) {
    switch (command.type) {
      case "move":
        return `M ${command.x} ${command.y}`;
      case "line":
        return `L ${command.x} ${command.y}`;
      case "quadratic":
        return `Q ${command.x1} ${command.y1} ${command.x} ${command.y}`;
      case "cubic":
        return `C ${command.x1} ${command.y1} ${command.x2} ${command.y2} ${command.x} ${command.y}`;
    }
  }

  return (
    <svg
      {...props}
      width={width}
      height={height}
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        height,
        ...props.style,
      }}
      viewBox={`${x} ${y} ${width} ${height}`}
      className="cmpui_curve-controls-svg"
      ref={ref}
    >
      {commands.map((command, i) => {
        let d = commandToD(command);
        const prev = commands[i - 1];

        if (prev) {
          const prevD = commandToD(prev);
          d = `${prevD} ${d}`;
        }

        return (
          <path
            key={i}
            d={d}
            strokeWidth={1}
            fill="none"
            onClick={onClickCurve}
          />
        );
      })}
    </svg>
  );
}
