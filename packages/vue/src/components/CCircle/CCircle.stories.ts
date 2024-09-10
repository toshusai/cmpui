import type { Meta, StoryObj } from "@storybook/vue3";
import CCircle from "./CCircle.vue";

const meta = {
  title: "parts/CCircle",
  component: CCircle,
  args: {
    x: 32,
    y: 32,
    radius: 8,
  },
} satisfies Meta<typeof CCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Custom: Story = {
  args: {
    strokeColor: "var(--cmpui-primary-color)",
    fill: "transparent",
    strokeWidth: 1,
  },
};
