import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { CubicControls } from ".";
import { clamp } from "../../utils/math/clamp";
import { Command, CubicCommand } from "./CubicCommand";

const meta: Meta<typeof CubicControls> = {
  title: "Controls/CubicControls",
  component: CubicControls,
};

export default meta;
type Story = StoryObj<typeof CubicControls>;

export const Default: Story = {
  render: function Render() {
    const [commands, setCommands] = useState<Command[]>([
      { type: "move", x: 0, y: 100 },
      { type: "cubic", x: 100, y: 0, x1: 50, y1: 100, x2: 50, y2: 0 },
    ]);
    const cubic = commands[1] as CubicCommand;

    return (
      <div
        style={{
          width: 100,
          height: 100,
          position: "relative",
        }}
      >
        <CubicControls
          prev={commands[0]}
          cubic={cubic}
          onChange={(cubic) => {
            cubic.x = clamp(cubic.x, 0, 100);
            cubic.y = clamp(cubic.y, 0, 100);
            cubic.x1 = clamp(cubic.x1, 0, 100);
            cubic.y1 = clamp(cubic.y1, 0, 100);
            cubic.x2 = clamp(cubic.x2, 0, 100);
            cubic.y2 = clamp(cubic.y2, 0, 100);

            setCommands([commands[0], cubic]);
          }}
        />
      </div>
    );
  },
};
