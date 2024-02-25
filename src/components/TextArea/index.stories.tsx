import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TextArea } from ".";

const meta: Meta<typeof TextArea> = {
  title: "Components/Form/TextArea",
  component: TextArea,
  args: {
    label: "Label",
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Basic: Story = {
  render: function Render() {
    const [value, setValue] = useState("");
    return (
      <TextArea
        label="Label"
        placeholder="Placeholder"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export const Label: Story = {
  render: function Render() {
    const [value, setValue] = useState("");
    return (
      <TextArea
        label="Label"
        id="text-area-label"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export const Placeholder: Story = {
  render: function Render() {
    const [value, setValue] = useState("");
    return (
      <TextArea
        label="Label"
        placeholder="Placeholder"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export const Disabled: Story = {
  render: function Render() {
    return <TextArea label="Label" disabled value="Disabled" />;
  },
};
