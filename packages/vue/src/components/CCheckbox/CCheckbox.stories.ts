import type { Meta, StoryObj } from "@storybook/vue3";
import CCheckbox from "./CCheckbox.vue";

const meta = {
  title: "inputs/CCheckbox",
  component: CCheckbox,
  args: {
    default: "Checkbox",
  },
} satisfies Meta<typeof CCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    default: "Checkbox",
  },
};

export const Checekd: Story = {
  args: {
    checked: true,
    default: "Checked",
  },
};

export const Small: Story = {
  args: {
    size: "S",
    default: "Small",
  },
};
