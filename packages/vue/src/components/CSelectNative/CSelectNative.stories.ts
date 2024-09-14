import type { Meta, StoryObj } from "@storybook/vue3";
import { h, ref } from "vue";
import CSelectNative from "./CSelectNative.vue";
import { codeWords } from "../../test/const";

const meta = {
  title: "inputs/CSelectNative",
  component: CSelectNative,
  args: {
    options: [],
  },
} satisfies Meta<typeof CSelectNative>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = codeWords.map((word) => ({ label: word, value: word }));

export const Default: Story = {
  render: () => ({
    setup() {
      const value = ref<string>("Charlie");
      return () =>
        h(CSelectNative, {
          modelValue: value.value,
          "onUpdate:modelValue": (v: string) => (value.value = v),
          options: options,
        });
    },
  }),
};

export const Disabled: Story = {
  render: () => ({
    setup() {
      const value = ref<string>("Charlie");
      return () =>
        h(CSelectNative, {
          disabled: true,
          modelValue: value.value,
          "onUpdate:modelValue": (v: string) => (value.value = v),
          options: options,
        });
    },
  }),
};

export const Label: Story = {
  render: () => ({
    setup() {
      const value = ref<string>("Charlie");
      return () =>
        h(CSelectNative, {
          label: "Label",
          modelValue: value.value,
          "onUpdate:modelValue": (v: string) => (value.value = v),
          options: options,
        });
    },
  }),
};
