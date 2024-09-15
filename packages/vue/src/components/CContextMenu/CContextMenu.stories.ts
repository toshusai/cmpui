import type { Meta, StoryObj } from "@storybook/vue3";
import { h } from "vue";
import CContextMenu from "./CContextMenu.vue";
import StoryCContextMenuExample from "./StoryCContextMenuExample.vue";

const meta = {
  title: "floating/CContextMenu",
  component: CContextMenu,
  args: {
    x: 0,
    y: 0,
    show: false,
  },
} satisfies Meta<typeof CContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return {
      setup() {
        return () => h(StoryCContextMenuExample);
      },
    };
  },
};
