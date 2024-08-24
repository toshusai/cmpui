import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SVPicker } from ".";

const meta: Meta<typeof SVPicker> = {
  title: "Colors/SVPicker",
  component: SVPicker,
};

export default meta;
type Story = StoryObj<typeof SVPicker>;

export const Default: Story = {
  render: function Render() {
    const [saturation, setSaturation] = useState(1);
    const [value, setValue] = useState(1);

    return (
      <SVPicker
        hue={0}
        onChange={(s, v) => {
          setSaturation(s);
          setValue(v);
        }}
        saturation={saturation}
        value={value}
      />
    );
  },
};
