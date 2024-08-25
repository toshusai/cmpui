import type { Meta, StoryObj } from "@storybook/react";

import { ColorLoupe } from ".";

const meta: Meta<typeof ColorLoupe> = {
  title: "Colors/ColorLoupe",
  component: ColorLoupe,
};

export default meta;
type Story = StoryObj<typeof ColorLoupe>;

export const Default: Story = {
  render: function Render() {
    return (
      <div
        style={{
          position: "relative",
          width: "100px",
          height: "100px",
        }}
      >
        <ColorLoupe color="#c649ba" x={50} y={50} />
      </div>
    );
  },
};
