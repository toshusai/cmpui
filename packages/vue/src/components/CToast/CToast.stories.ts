import type { Meta, StoryObj } from "@storybook/vue3";
import { h, ref } from "vue";
import CToast from "./CToast.vue";
import CButton from "../CButton/CButton.vue";

const meta = {
  component: CToast,
} satisfies Meta<typeof CToast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    setup() {
      const show = ref(false);
      return () =>
        h(() => [
          h(
            CButton,
            {
              onClick: () => (show.value = true),
            },
            () => "Show Toast",
          ),
          h(
            CToast,
            {
              show: show.value,
              onClose: () => (show.value = false),
            },
            () => "Hello World",
          ),
        ]);
    },
  }),
};
