import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RectGizmo } from ".";
import { Grid } from "../Grid";

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
    const origin = { x: 50, y: 50 };

    const [position, setPosition] = useState({ x: 200, y: 200 });

    const [scaleX, setScaleX] = useState(1);
    const [scaleY, setScaleY] = useState(1);
    const [angle, setAngle] = useState(0);
    return (
      <div
        style={{
          width: "100%",
          height: 512,
          position: "relative",
        }}
      >
        <Grid sizeX={50} sizeY={50} offsetX={0} offsetY={0} />
        <RectGizmo
          angle={angle}
          onChangeAngle={setAngle}
          position={position}
          origin={origin}
          scaleX={scaleX}
          setScaleX={setScaleX}
          scaleY={scaleY}
          setScaleY={setScaleY}
          width={100}
          height={200}
          setPosition={setPosition}
          canResize
          canRotate
          showOrigin
        />
      </div>
    );
  },
};

export const NormalizedSize: Story = {
  render: function Render() {
    const origin = { x: 0.5, y: 0.5 };

    const [position, setPosition] = useState({ x: 200, y: 200 });

    const [scaleX, setScaleX] = useState(200);
    const [scaleY, setScaleY] = useState(200);
    const [angle, setAngle] = useState(0);
    return (
      <div
        style={{
          width: "100%",
          height: 512,
          position: "relative",
        }}
      >
        <Grid sizeX={50} sizeY={50} offsetX={0} offsetY={0} />
        <RectGizmo
          angle={angle}
          onChangeAngle={setAngle}
          position={position}
          origin={origin}
          scaleX={scaleX}
          setScaleX={setScaleX}
          scaleY={scaleY}
          setScaleY={setScaleY}
          width={1}
          height={1}
          setPosition={setPosition}
          canResize
          canRotate
          showOrigin
        />
      </div>
    );
  },
};

export const CornerOrigin: Story = {
  render: function Render() {
    const origin = { x: 0, y: 0 };
    const [position, setPosition] = useState({ x: 200, y: 200 });
    const [scaleX, setScaleX] = useState(1);
    const [scaleY, setScaleY] = useState(1);
    const [angle, setAngle] = useState(0);
    return (
      <div
        style={{
          width: "100%",
          height: 512,
          position: "relative",
        }}
      >
        <Grid sizeX={50} sizeY={50} offsetX={0} offsetY={0} />
        <RectGizmo
          angle={angle}
          onChangeAngle={setAngle}
          setPosition={setPosition}
          position={position}
          origin={origin}
          scaleX={scaleX}
          setScaleX={setScaleX}
          scaleY={scaleY}
          setScaleY={setScaleY}
          width={100}
          height={200}
          canResize
          canRotate
          showOrigin
        />
      </div>
    );
  },
};
