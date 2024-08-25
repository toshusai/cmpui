import type { Meta, StoryObj } from "@storybook/vue3";
import Checkbox from "./Checkbox.vue";

const meta = {
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    checked: true,
  },
};

export const Label: Story = {
  args: {
    default: "Label",
    id: "label",
  },
};
