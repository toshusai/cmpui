import type { Meta, StoryObj } from "@storybook/vue3";
import { h } from "vue";
import CSubMenuPopover from "./CSubMenuPopover.vue";
import StorySubMenuPopoverExample2 from "./stories/StorySubMenuPopoverExample2/StorySubMenuPopoverExample2.vue";
import StorySubMenuPopoverExample from "./stories/StorySubMenuPopoverExample.vue";

const meta = {
  title: "floating/CSubMenuPopover",
  component: CSubMenuPopover,
  args: {
    show: false,
    trigger: null,
  },
} satisfies Meta<typeof CSubMenuPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => h(StorySubMenuPopoverExample),
};

export const Example2: Story = {
  render: () => h(StorySubMenuPopoverExample2),
};
