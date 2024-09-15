import type { Meta, StoryObj } from "@storybook/vue3";
import CSVCanvas from "./CSVCanvas.vue";
import { h, ref } from "vue";

const meta = {
  title: "parts/CSVCanvas",
  component: CSVCanvas,
  args: {
    hue: 0,
    width: 256,
    height: 256,
  },
} satisfies Meta<typeof CSVCanvas>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    setup() {
      const hue = ref(0);
      return () =>
        h(CSVCanvas, {
          hue: hue.value,
          width: 256,
          height: 256,
        });
    },
  }),
};
