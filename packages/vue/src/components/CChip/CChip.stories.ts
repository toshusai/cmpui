import type { Meta, StoryObj } from "@storybook/vue3";
import { h } from "vue";
import CChip from "./CChip.vue";

const meta = {
  title: "data display/CChip",
  component: CChip,
} satisfies Meta<typeof CChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => h(CChip, () => "Hello World"),
};

export const Rounded: Story = {
  render: () => h(CChip, { rounded: true }, () => "Hello World"),
};

export const Clickable: Story = {
  render: () => h(CChip, { clickable: true }, () => "Hello World"),
};

export const Size: Story = {
  render: () =>
    h(() => [
      h(CChip, { size: "S" }, () => "Hello World"),
      h(CChip, {}, () => "Hello World"),
      h(CChip, { size: "L" }, () => "Hello World"),
    ]),
};
