import type { Meta, StoryObj } from "@storybook/vue3";
import { h } from "vue";
import CLoading from "./CLoading.vue";

const meta = {
  title: "parts/CLoading",
  component: CLoading,
} satisfies Meta<typeof CLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => h(CLoading),
};

export const Size: Story = {
  render: () =>
    h(() => [
      h(CLoading, { size: "S" }),
      h(CLoading, {}),
      h(CLoading, { size: "L" }),
    ]),
};
