import type { Meta, StoryObj } from "@storybook/vue3";
import { h, ref } from "vue";
import CSelectNative from "./CSelectNative.vue";

const meta = {
  title: "inputs/CSelectNative",
  component: CSelectNative,
  args: {
    options: [],
  },
} satisfies Meta<typeof CSelectNative>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { label: "Alfa", value: "Alfa" },
  { label: "Bravo", value: "Bravo" },
  { label: "Charlie", value: "Charlie" },
  { label: "Delta", value: "Delta" },
  { label: "Echo", value: "Echo" },
  { label: "Foxtrot", value: "Foxtrot" },
  { label: "Golf", value: "Golf" },
  { label: "Hotel", value: "Hotel" },
  { label: "India", value: "India" },
  { label: "Juliett", value: "Juliett" },
  { label: "Kilo", value: "Kilo" },
  { label: "Lima", value: "Lima" },
  { label: "Mike", value: "Mike" },
  { label: "November", value: "November" },
  { label: "Oscar", value: "Oscar" },
  { label: "Papa", value: "Papa" },
  { label: "Quebec", value: "Quebec" },
  { label: "Romeo", value: "Romeo" },
  { label: "Sierra", value: "Sierra" },
  { label: "Tango", value: "Tango" },
  { label: "Uniform", value: "Uniform" },
  { label: "Victor", value: "Victor" },
  { label: "Whiskey", value: "Whiskey" },
  { label: "X-ray", value: "X-ray" },
  { label: "Yankee", value: "Yankee" },
  { label: "Zulu", value: "Zulu" },
];

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
