import type { Meta, StoryObj } from "@storybook/vue3";
import CFloatBox from "./CFloatBox.vue";

const meta = {
  title: "parts/CFloatBox",
  component: CFloatBox,
} satisfies Meta<typeof CFloatBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    default: "Hello, World!",
  },
};
