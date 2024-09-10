import type { Meta, StoryObj } from "@storybook/vue3";
import { h } from "vue";
import CDrawer from "./CDrawer.vue";

import StoryDefault from "./stories/StoryDefault.vue";

const meta = {
  component: CDrawer,
} satisfies Meta<typeof CDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => h(StoryDefault),
};

export const Right: Story = {
  render: () => h(StoryDefault, { position: "right" }),
};
