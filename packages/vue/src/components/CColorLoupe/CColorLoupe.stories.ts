import type { Meta, StoryObj } from "@storybook/vue3";
import { h } from "vue";
import CColorLoupe from "./CColorLoupe.vue";

const meta = {
  title: "data display/CColorLoupe",
  component: CColorLoupe,
  args: {
    x: 50,
    y: 50,
    color: "#ff0000",
  },
} satisfies Meta<typeof CColorLoupe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () =>
    h(CColorLoupe, {
      x: 50,
      y: 50,
      color: "#ff0000",
    }),
};
