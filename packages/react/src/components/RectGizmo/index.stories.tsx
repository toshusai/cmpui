import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Grid } from "../Grid";

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
    const [transform, setTransform] = useState({
      scale: { x: 1, y: 1 },
      rotation: 0,
      position: { x: 100, y: 100 },
      origin: { x: 10, y: 50 },
      width: 100,
      height: 100,
    });
    return (
      <div
        style={{
          width: "100%",
          height: 512,
          position: "relative",
        }}
      >
        <Grid sizeX={50} sizeY={50} offsetX={0} offsetY={0} />
        <RectGizmo {...transform} onChange={(v) => setTransform(v)} />
      </div>
    );
  },
};
