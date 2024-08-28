import type { Meta, StoryObj } from "@storybook/vue3";
import PopoverStories from "./PopoverStory.vue";

const meta = {
  title: "components/Popover",
  component: PopoverStories,
  tags: ["autodocs"],
} satisfies Meta<typeof PopoverStories>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
