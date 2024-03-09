import type { Meta, StoryObj } from "@storybook/react";
import { Path } from ".";

const meta: Meta<typeof Path> = {
  title: "Controls/Path",
  component: Path,
};

export default meta;
type Story = StoryObj<typeof Path>;

export const Basic: Story = {
  render: function Render() {
    return (
      <Path
        commands={[
          { type: "move", x: 0, y: 0 },
          { type: "cubic", x: 200, y: 200, x1: 100, y1: 0, x2: 100, y2: 200 },
        ]}
      />
    );
  },
};
