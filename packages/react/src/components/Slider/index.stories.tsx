import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Slider } from ".";

const meta: Meta<typeof Slider> = {
  title: "Form/Slider",
  component: Slider,
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState(0.5);
    return (
      <>
        <Slider value={value} onChange={setValue} />
      </>
    );
  },
};

export const MinMax: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    return (
      <>
        <Slider max={100} min={-50} value={value} onChange={setValue} />
      </>
    );
  },
};

export const RtoL: Story = {
  render: () => {
    const [value, setValue] = useState(0.5);
    return (
      <>
        <Slider direction="rtl" value={value} onChange={setValue} />
      </>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [value, setValue] = useState(0.5);
    return (
      <>
        <Slider orientation="vertical" value={value} onChange={setValue} />
      </>
    );
  },
};

export const VerticalR2L: Story = {
  render: () => {
    const [value, setValue] = useState(0.5);
    return (
      <>
        <Slider
          orientation="vertical"
          direction="rtl"
          value={value}
          onChange={setValue}
        />
      </>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState(0.5);
    return (
      <>
        <Slider disabled value={value} onChange={setValue} />
      </>
    );
  },
};
