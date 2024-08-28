import type { Meta, StoryObj } from "@storybook/vue3";
import ModalStory from "./ModalStory.vue";

const meta = {
  title: "components/Modal",
  component: ModalStory,
  tags: ["autodocs"],
} satisfies Meta<typeof ModalStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
