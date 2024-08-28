import type { Meta, StoryObj } from "@storybook/vue3";
import TextInput from "./TextInput.vue";

const meta = {
  title: "components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    default: "Label",
    placeholder: "Placeholder",
  },
};
