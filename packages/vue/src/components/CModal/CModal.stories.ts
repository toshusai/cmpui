import type { Meta, StoryObj } from "@storybook/vue3";
import { h } from "vue";
import CModal from "./CModal.vue";
import StoryDefaultModal from "./stories/StoryDefaultModal.vue";
import NestExample from "./stories/NestExample.vue";

const meta = {
  component: CModal,
  args: {
    show: false,
    title: "Modal Title",
  },
} satisfies Meta<typeof CModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => h(StoryDefaultModal),
};

export const Nest: Story = {
  render: () => h(NestExample),
};
