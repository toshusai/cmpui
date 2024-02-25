import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TextInput } from ".";

const meta: Meta<typeof TextInput> = {
  title: "Components/Form/TextInput",
  component: TextInput,
  args: {
    label: "Label",
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Basic: Story = {
  render: function Render() {
    const [value, setValue] = useState("");
    return (
      <TextInput
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
      <TextInput
        label="Label"
        id="text-input-label"
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
      <TextInput
        label=""
        placeholder="Placeholder"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export const Suffix: Story = {
  render: function Render() {
    const [value, setValue] = useState("");
    return (
      <TextInput
        label="Label"
        prefix={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            style={{
              maxWidth: 16,
              height: 16,
            }}
          >
            <title>search</title>
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        }
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export const Disabled: Story = {
  render: function Render() {
    const [value, setValue] = useState("");
    return (
      <TextInput
        label="Label"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        disabled
      />
    );
  },
};

export const Invalid: Story = {
  render: function Render() {
    const [value, setValue] = useState("");
    return (
      <TextInput
        label="Label"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        invalid
      />
    );
  },
};
