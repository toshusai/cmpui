import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { AngleInput } from ".";

const meta: Meta<typeof AngleInput> = {
  title: "Form/AngleInput",
  component: AngleInput,
};

export default meta;
export type Story = StoryObj<typeof AngleInput>;

export const Basic: Story = {
  render: function Render() {
    const [value, setValue] = useState(0);
    return <AngleInput value={value} onChange={setValue} />;
  },
};

export const Step: Story = {
  render: function Render() {
    const [value, setValue] = useState(0);
    return <AngleInput value={value} onChange={setValue} step={8} />;
  },
};

export const Size: Story = {
  render: function Render() {
    const [value, setValue] = useState(0);
    return (
      <AngleInput
        value={value}
        onChange={setValue}
        radius={64}
        nobRadius={12}
      />
    );
  },
};
