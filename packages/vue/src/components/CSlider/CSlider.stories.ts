import type { Meta, StoryObj } from "@storybook/vue3";
import CSlider from "./CSlider.vue";
import { h, ref } from "vue";
import { Orientation } from "@toshusai/cmpui-core";

const meta = {
  title: "inputs/CSlider",
  component: CSlider,
} satisfies Meta<typeof CSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    setup() {
      const value = ref(50);

      return () => [
        h(CSlider, {
          modelValue: value.value,
          "onUpdate:modelValue": (v) => (value.value = v),
        }),
        h(CSlider, {
          modelValue: value.value,
          direction: "rtl",
          "onUpdate:modelValue": (v) => (value.value = v),
        }),
      ];
    },
  }),
};

export const Vertical: Story = {
  render: () => ({
    setup() {
      const value = ref(50);

      return () =>
        h(
          "div",
          {
            style: {
              display: "flex",
              gap: "8px",
              flexDirection: "row",
            },
          },
          [
            h(CSlider, {
              modelValue: value.value,
              orientation: Orientation.Vertical,
              "onUpdate:modelValue": (v) => (value.value = v),
            }),
            h(CSlider, {
              modelValue: value.value,
              direction: "rtl",
              orientation: Orientation.Vertical,
              "onUpdate:modelValue": (v) => (value.value = v),
            }),
          ],
        );
    },
  }),
};
