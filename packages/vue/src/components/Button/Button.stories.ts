import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "./Button.vue";

const meta = {
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    default: "Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    default: "Button",
    variant: "secondary",
  },
};

export const Small: Story = {
  args: {
    default: "Button",
    size: "S",
  },
};

export const Disabled: Story = {
  args: {
    default: "Button",
    disabled: true,
  },
};
