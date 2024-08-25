import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "../../__stories__/Icon";

import { Switch } from ".";

const meta: Meta<typeof Switch> = {
  title: "Form/Switch",
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        id="switch"
        label="Label"
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};

export const Label: Story = {
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        label={
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Icon
              style={{
                fontSize: 16,
              }}
              name="star"
            />
            <div>Custom Label</div>
          </div>
        }
        id="switch-label"
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};

export const Disabled: Story = {
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        label="Label"
        id="switch-disabled"
        disabled
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};

export const Checked: Story = {
  render: function Render() {
    const [checked, setChecked] = useState(true);
    return (
      <Switch
        label="Label"
        id="switch-checked"
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};
