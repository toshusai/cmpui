import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { codeWords } from "../../__stories__/const";

import { Select } from ".";

const meta: Meta<typeof Select> = {
  title: "inputs/Select",
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Basic: Story = {
  render: function Render() {
    const [value, setValue] = useState(codeWords[8]);
    const options = codeWords.map((word) => ({ label: word, value: word }));
    return (
      <Select
        label="Label"
        value={value}
        options={options}
        onChange={(v) => setValue(v)}
      ></Select>
    );
  },
};
