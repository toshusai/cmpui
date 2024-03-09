import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RectGizmo } from ".";

const meta: Meta<typeof RectGizmo> = {
  title: "Controls/RectGizmo",
  component: RectGizmo,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof RectGizmo>;

export const Basic: Story = {
  render: function Render() {
    const [points, setPoints] = useState({
      x: 256,
      y: 256,
      width: 100,
      height: 50,
      angle: 0,
    });
    return (
      <div
        style={{
          width: "100%",
          height: 512,
          position: "relative",
        }}
      >
        <RectGizmo
          angle={points.angle}
          width={points.width}
          height={points.height}
          x={points.x}
          y={points.y}
          onMove={(args) => {
            setPoints({
              ...points,
              ...args,
            });
          }}
          isResizable
          isRotatable
        />
      </div>
    );
  },
};

export const NobSize: Story = {
  render: function Render() {
    const [points, setPoints] = useState({
      x: 256,
      y: 256,
      width: 100,
      height: 50,
      angle: 0,
    });
    return (
      <div
        style={{
          width: "100%",
          height: 512,
          position: "relative",
        }}
      >
        <RectGizmo
          angle={points.angle}
          width={points.width}
          height={points.height}
          x={points.x}
          y={points.y}
          nobRadius={4}
          onMove={(args) => {
            setPoints({
              ...points,
              ...args,
            });
          }}
          isResizable
          isRotatable
        />
      </div>
    );
  },
};

export const Debug: Story = {
  render: function Render() {
    const [points, setPoints] = useState({
      x: 256,
      y: 256,
      width: 100,
      height: 50,
      angle: 0,
    });
    return (
      <div
        style={{
          width: "100%",
          height: 512,
          position: "relative",
        }}
      >
        <div
          className="cmpui_mono"
          style={{
            position: "absolute",
            fontFamily:
              'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            top: points.y - Math.abs(points.height) / 2,
            left: points.x - Math.abs(points.width) / 2,
            padding: 8,
            boxSizing: "border-box",
            width: Math.abs(points.width),
            height: Math.abs(points.height),
            background: "rgba(0, 0, 0, 0.5)",
            transform: `rotate(${points.angle}rad) scale(${
              points.width > 0 ? 1 : -1
            }, ${points.height > 0 ? 1 : -1})`,
            transformOrigin: "center",
            color: "white",
            whiteSpace: "nowrap",
          }}
        >
          <div>x: {points.x.toFixed(2)}</div>
          <div>y: {points.y.toFixed(2)}</div>
          <div>w: {points.width.toFixed(2)}</div>
          <div>h: {points.height.toFixed(2)}</div>
          <div>a: {points.angle.toFixed(2)}</div>
        </div>
        <RectGizmo
          angle={points.angle}
          width={points.width}
          height={points.height}
          x={points.x}
          y={points.y}
          onMove={(args) => {
            setPoints({
              ...points,
              ...args,
            });
          }}
          isResizable
          isRotatable
        />
      </div>
    );
  },
};
