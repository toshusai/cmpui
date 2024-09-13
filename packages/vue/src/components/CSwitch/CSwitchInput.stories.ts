import type { Meta, StoryObj } from "@storybook/vue3";
import CCheckboxInput from "./CSwitchInput.vue";

const meta = {
  title: "inputs/CSwitchInput",
  component: CCheckboxInput,
} satisfies Meta<typeof CCheckboxInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    size: "S",
  },
};