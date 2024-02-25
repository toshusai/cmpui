import type { Meta, StoryObj } from "@storybook/react";
import { useCallback, useState } from "react";
import { ColorPickerCircle } from ".";
import { HSVA } from "../..";
import { hexToHsv } from "../../utils/colors/hexToHsv";

const meta: Meta<typeof ColorPickerCircle> = {
  title: "Components/Colors/ColorPickerCircle",
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
