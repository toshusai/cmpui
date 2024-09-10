import type { Meta, StoryObj } from "@storybook/vue3";
import { h } from "vue";
import CSubMenuPopover from "./CSubMenuPopover.vue";
import SubMenuExample from "./stories/SubMenuPopoverExample/SubMenuPopoverExample.vue";

const meta = {
  title: "components/CSubMenuPopover",
  component: CSubMenuPopover,
  args: {
    trigger: null,
  },
} satisfies Meta<typeof CSubMenuPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _SubMenuExample: Story = {
  render: () => h(SubMenuExample),
};
