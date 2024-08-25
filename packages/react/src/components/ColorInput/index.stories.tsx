import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { hexToHsv } from "../../utils/colors/hexToHsv";

import { ColorInput } from ".";

const meta: Meta<typeof ColorInput> = {
  title: "Colors/ColorInput",
  component: ColorInput,
};

export default meta;
type Story = StoryObj<typeof ColorInput>;

export const Primary: Story = {
  render: function RenderBasic() {
    const [color, setColor] = useState({ ...hexToHsv("#c649ba"), a: 0.5 });

    return (
      <div
        style={{
          width: 192,
        }}
      >
        <ColorInput
          label="ColorInput"
          value={color}
          onChange={(value) => setColor(value)}
        />
      </div>
    );
  },
};
