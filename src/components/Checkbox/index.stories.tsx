import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from ".";
import { Icon } from "../../__stories__/Icon";

const meta: Meta<typeof Checkbox> = {
  title: "Form/Checkbox",
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        label="Label"
        checked={checked}
        id="checkbox-basic"
        onChange={setChecked}
      />
    );
  },
};

export const Label: Story = {
  render: function Render() {
    const [checked, setChecked] = useState(true);
    return (
      <Checkbox
        checked={checked}
        onChange={setChecked}
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
        id="checkbox-label"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return <Checkbox label="Label" id="checkbox-disabled" disabled />;
  },
};

export const Checked: Story = {
  render: function Render() {
    const [checked, setChecked] = useState(true);
    return (
      <Checkbox
        label="Label"
        id="checkbox-checked"
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};
