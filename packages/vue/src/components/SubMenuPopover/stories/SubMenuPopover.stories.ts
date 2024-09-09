import type { Meta, StoryObj } from "@storybook/vue3";
import { h } from "vue";
import SubMenuPopover from "../SubMenuPopover.vue";
import SubMenuExample from "./SubMenuPopoverExample/SubMenuPopoverExample.vue";

const meta = {
  title: "components/SubMenuPopover",
  component: SubMenuPopover,
  args: {
    trigger: null,
  },
} satisfies Meta<typeof SubMenuPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _SubMenuExample: Story = {
  render: () => h(SubMenuExample),
};
