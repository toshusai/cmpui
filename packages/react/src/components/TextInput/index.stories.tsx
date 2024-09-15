import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconCurrencyDollar, IconEye, IconEyeOff } from "@tabler/icons-react";

import { IconButton } from "../IconButton";

import { TextInput } from ".";

const meta: Meta<typeof TextInput> = {
  title: "Form/TextInput",
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

export const Prefix: Story = {
  render: function Render() {
    const [value, setValue] = useState("");
    return (
      <TextInput
        label="Amount"
        placeholder="1.0"
        type="number"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        prefix={
          <IconCurrencyDollar
            size={16}
            style={{ margin: "0 4px", minWidth: "16px" }}
          />
        }
      />
    );
  },
};

export const Suffix: Story = {
  render: function Render() {
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = useState("NN2mdJec,Ff+^[a");
    return (
      <TextInput
        label="Password"
        placeholder="password"
        type={showPassword ? "text" : "password"}
        suffix={
          <IconButton
            onClick={() => setShowPassword((v) => !v)}
            size="S"
            style={{ marginRight: "4px" }}
          >
            {showPassword ? (
              <IconEyeOff
                size={16}
                style={{ margin: "0 4px", minWidth: "16px" }}
              />
            ) : (
              <IconEye
                size={16}
                style={{ margin: "0 4px", minWidth: "16px" }}
              />
            )}
          </IconButton>
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
