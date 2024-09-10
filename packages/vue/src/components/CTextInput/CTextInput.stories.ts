import type { Meta, StoryObj } from "@storybook/vue3";
import CTextInput from "./CTextInput.vue";

const meta = {
  title: "inputs/CTextInput",
  component: CTextInput,
} satisfies Meta<typeof CTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    default: "Label",
    placeholder: "Placeholder",
  },
};
