import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ColorPickerRect } from ".";

const meta: Meta<typeof ColorPickerRect> = {
  title: "Colors/ColorPickerRect",
  component: ColorPickerRect,
};

export default meta;
type Story = StoryObj<typeof ColorPickerRect>;

export const Default: Story = {
  render: function Render() {
    const [saturation, setSaturation] = useState(0.5);
    const [value, setValue] = useState(0.5);
    const [hue, setHue] = useState(0);
    const [alpha, setAlpha] = useState(1);

    return (
      <ColorPickerRect
        hue={hue}
        onChange={(hsva) => {
          setHue(hsva.h);
          setSaturation(hsva.s);
          setValue(hsva.v);
          setAlpha(hsva.a);
        }}
        alpha={alpha}
        saturation={saturation}
        value={value}
      />
    );
  },
};
