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
  render: () => h(CChip, { ["data-rounded"]: true }, () => "Hello World"),
};

export const Size: Story = {
  render: () =>
    h(() => [
      h(CChip, { ["data-size"]: "S" }, () => "Hello World"),
      h(CChip, {}, () => "Hello World"),
      h(CChip, { ["data-size"]: "L" }, () => "Hello World"),
    ]),
};
