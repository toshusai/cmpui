import type { Meta, StoryObj } from "@storybook/vue3";
import { h } from "vue";
import Modal from "./Modal.vue";
import StoryDefaultModal from "./stories/StoryDefaultModal.vue";

const meta = {
  component: Modal,
  args: {
    show: false,
    title: "Modal Title",
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => h(StoryDefaultModal),
};
