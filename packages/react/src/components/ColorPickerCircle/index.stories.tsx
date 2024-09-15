import { useCallback, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { HSVA } from "@toshusai/cmpui-core";
import { hexToHsv } from "@toshusai/cmpui-core";

import { ColorPickerCircle } from ".";

const meta: Meta<typeof ColorPickerCircle> = {
  title: "Colors/ColorPickerCircle",
  component: ColorPickerCircle,
};

export default meta;
type Story = StoryObj<typeof ColorPickerCircle>;

export const Default: Story = {
  render: function Render() {
    const hsv = hexToHsv("#c649ba");
    const [saturation, setSaturation] = useState(hsv.s);
    const [value, setValue] = useState(hsv.v);
    const [hue, setHue] = useState(hsv.h);
    const [alpha, setAlpha] = useState(hsv.a);

    const handleChange = useCallback((hsva: HSVA) => {
      setHue(hsva.h);
      setSaturation(hsva.s);
      setValue(hsva.v);
      setAlpha(hsva.a);
    }, []);

    return (
      <ColorPickerCircle
        hue={hue}
        onChange={handleChange}
        alpha={alpha}
        saturation={saturation}
        value={value}
      />
    );
  },
};
