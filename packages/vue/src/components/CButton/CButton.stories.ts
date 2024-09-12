import type { Meta, StoryObj } from "@storybook/vue3";
import CButton from "./CButton.vue";
import { h } from "vue";

const meta = {
  title: "inputs/CButton",
  tags: ["autodocs"],
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

export const Variants: Story = {
  render: () =>
    h(() => [
      h(CButton, { variant: "primary" }, () => "Primary"),
      h(CButton, { variant: "secondary" }, () => "Secondary"),
      h(CButton, { variant: "transparent" }, () => "Transparent"),
    ]),
};

export const Sizes: Story = {
  render: () =>
    h(() => [
      h(CButton, { size: "M" }, () => "Medium"),
      h(CButton, { size: "S" }, () => "Small"),
    ]),
};

export const Disabled: Story = {
  render: () =>
    h(() => [
      h(CButton, { variant: "primary", disabled: true }, () => "Primary"),
      h(CButton, { variant: "secondary", disabled: true }, () => "Secondary"),
    ]),
};

export const Bordered: Story = {
  render: () =>
    h(() => [
      h(CButton, { variant: "primary", bordered: true }, () => "Primary"),
      h(CButton, { variant: "secondary", bordered: true }, () => "Secondary"),
    ]),
};
