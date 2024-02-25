import type { Meta, StoryObj } from "@storybook/react";
import { Line } from ".";

const meta: Meta<typeof Line> = {
  title: "Components/Controls/Line",
  component: Line,
};

export default meta;
type Story = StoryObj<typeof Line>;

export const Basic: Story = {
  render: function Render() {
    return (
      <div
        style={{
          width: 200,
          height: 200,
          position: "relative",
        }}
      >
        <Line
          x1={0}
          y1={0}
          x2={200}
          y2={200}
          strokeWidth={1}
          stroke="var(--cmpui-primary-color)"
        />
      </div>
    );
  },
};
