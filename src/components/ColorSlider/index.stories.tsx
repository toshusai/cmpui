import type { Meta, StoryObj } from "@storybook/react";
import { useMemo, useState } from "react";
import { ColorSlider } from ".";
import { hsvToRgb } from "../../utils/colors/hsvToRgb";

const meta: Meta<typeof ColorSlider> = {
  title: "Components/Colors/ColorSlider",
  component: ColorSlider,
};

export default meta;
type Story = StoryObj<typeof ColorSlider>;

export const Default: Story = {
  render: function Render() {
    const [value, setValue] = useState(0.5);

    return (
      <ColorSlider
        color={{
          r: (1 - value) * 255,
          g: (1 - value) * 255,
          b: (1 - value) * 255,
          a: value,
        }}
        value={value}
        onChange={setValue}
        bg={
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
            }}
          />
        }
      />
    );
  },
};

export const Hue: Story = {
  render: function Render() {
    const [value, setValue] = useState(0.5);

    const color = useMemo(() => {
      const { r, g, b } = hsvToRgb({ h: value * 360, s: 1, v: 1 });
      return { r, g, b, a: 1 };
    }, [value]);

    return (
      <ColorSlider
        color={color}
        value={value}
        onChange={setValue}
        bg={
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage:
                "linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)",
            }}
          />
        }
      />
    );
  },
};

export const HeightAndNobSize: Story = {
  render: function Render() {
    const [value, setValue] = useState(0.5);

    return (
      <ColorSlider
        color={{
          r: value * 255,
          g: 0,
          b: 0,
          a: 1,
        }}
        height={32}
        value={value}
        onChange={setValue}
        bg={
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: "linear-gradient(to right, black, red)",
            }}
          />
        }
      />
    );
  },
};
