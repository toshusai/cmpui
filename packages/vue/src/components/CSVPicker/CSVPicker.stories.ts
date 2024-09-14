import type { Meta, StoryObj } from "@storybook/vue3";
import CSVPicker from "./CSVPicker.vue";
import { h, ref } from "vue";

const meta = {
  title: "inputs/CSVPicker",
  component: CSVPicker,
  args: {
    width: 256,
    height: 256,
    hue: 0,
    saturation: 0,
    value: 0,
  },
} satisfies Meta<typeof CSVPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    setup() {
      const saturation = ref(0);
      const value = ref(0);
      const hue = ref(0);
      return () =>
        h(CSVPicker, {
          hue: hue.value,
          saturation: saturation.value,
          value: value.value,
          width: 256,
          height: 256,
          onChange: (s, v) => {
            saturation.value = s;
            value.value = v;
          },
        });
    },
  }),
};
