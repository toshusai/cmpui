import type { Meta, StoryObj } from "@storybook/vue3";
import CToaster from "./CToaster.vue";
import { h } from "vue";
import StoryToasterDefault from "./stories/StoryToasterDefault.vue";
import StoryToasterControlled from "./stories/StoryToasterControlled.vue";
import { useProvideToastContext } from "./useToast";

const meta = {
  title: "floating/CToaster",
  component: CToaster,
} satisfies Meta<typeof CToaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    setup() {
      useProvideToastContext();
      return () => h(() => [h(StoryToasterDefault), h(CToaster)]);
    },
  }),
};

export const Controlled: Story = {
  render: () => ({
    setup() {
      useProvideToastContext();
      return () => h(() => [h(StoryToasterControlled), h(CToaster)]);
    },
  }),
};
