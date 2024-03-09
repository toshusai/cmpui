import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { HueCircle } from ".";

const meta: Meta<typeof HueCircle> = {
  title: "Colors/HueCircle",
  component: HueCircle,
};

export default meta;
type Story = StoryObj<typeof HueCircle>;

export const Default: Story = {
  render: function Render() {
    const [hue, setHue] = useState(0);

    return <HueCircle hue={hue} onHueChange={setHue} />;
  },
};

export const Size: Story = {
  render: function Render() {
    const [hue, setHue] = useState(0);

    return <HueCircle hue={hue} onHueChange={setHue} size={64} />;
  },
};

export const ForMobile: Story = {
  render: function Render() {
    const [hue, setHue] = useState(0);

    return (
      <HueCircle hue={hue} showLoupe onHueChange={setHue} strokeWidth={32} />
    );
  },
};
