import type { Meta, StoryObj } from "@storybook/vue3";
import SelectStory from "./SelectStory.vue";

const meta = {
  title: "Components/Select",
  component: SelectStory,
  tags: ["autodocs"],
} satisfies Meta<typeof SelectStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Label: Story = {
  args: {
    label: "Label",
  },
};

export const Show: Story = {
  args: {
    defaultShow: true,
  },
};
