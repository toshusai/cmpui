import type { Meta, StoryObj } from "@storybook/vue3";
import CButton from "./CButton.vue";

const meta = {
  title: "inputs/CButton",
  component: CButton,
} satisfies Meta<typeof CButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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

export const Transparent: Story = {
  args: {
    default: "Button",
    variant: "transparent",
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

export const Bordered: Story = {
  args: {
    default: "Bordered",
    bordered: true,
    variant: "secondary",
  },
};
