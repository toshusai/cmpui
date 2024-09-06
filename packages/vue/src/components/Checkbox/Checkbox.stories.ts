import type { Meta, StoryObj } from "@storybook/vue3";
import Checkbox from "./Checkbox.vue";

const meta = {
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checekd: Story = {
  args: {
    checked: true,
  },
};

export const Label: Story = {
  args: {
    default: "Label",
  },
};
