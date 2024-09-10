import type { Meta, StoryObj } from "@storybook/vue3";
import CLine from "./CLine.vue";

const meta = {
  title: "parts/CLine",
  component: CLine,
  args: {
    x1: 32,
    y1: 32,
    x2: 128,
    y2: 128,
    strokeWidth: 1,
    stroke: "var(--cmpui-primary-color)",
  },
} satisfies Meta<typeof CLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
