import type { Meta, StoryObj } from "@storybook/vue3";
import CCheckbox from "./CCheckbox.vue";
import { h } from "vue";
import StoryCCheckboxControlled from "./stories/StoryCCheckboxControlled.vue";

const meta = {
  title: "inputs/CCheckbox",
  args: {
    label: "Checkbox",
  },
  component: CCheckbox,
} satisfies Meta<typeof CCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Controlled: Story = {
  render: () => h(StoryCCheckboxControlled),
};

export const Checked: Story = {
  args: {
    checked: true,
    label: "Checked",
  },
};

export const CustomLabel: Story = {
  args: {
    checked: true,
    label: h("span", [h("b", "Custom"), " Label"]),
  },
};

export const Small: Story = {
  args: {
    size: "S",
    label: "Small",
  },
};
