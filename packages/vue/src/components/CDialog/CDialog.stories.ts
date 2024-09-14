import type { Meta, StoryObj } from "@storybook/vue3";
import CDialog from "./CDialog.vue";
import { h } from "vue";
import StoryDefaultModal from "./StoryDefaultModal.vue";

const meta = {
  title: "parts/CDialog",
  component: CDialog,
  args: {
    show: false,
    title: "Dialog Title",
  },
} satisfies Meta<typeof CDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => h(StoryDefaultModal),
};
