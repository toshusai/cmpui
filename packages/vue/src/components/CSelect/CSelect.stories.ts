import type { Meta, StoryObj } from "@storybook/vue3";
import CSelect from "./CSelect.vue";
import { h, ref } from "vue";

const meta = {
  title: "inputs/CSelect",
  component: CSelect,
} satisfies Meta<typeof CSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const names = [
  "Alfa",
  "Bravo",
  "Charlie",
  "Delta",
  "Echo",
  "Foxtrot",
  "Golf",
  "Hotel",
  "India",
  "Juliett",
  "Kilo",
  "Lima",
  "Mike",
  "November",
  "Oscar",
  "Papa",
  "Quebec",
  "Romeo",
  "Sierra",
  "Tango",
  "Uniform",
  "Victor",
  "Whiskey",
  "X-ray",
  "Yankee",
  "Zulu",
];

const style = {
  transform: `translateY(-64px)`,
};

export const Default: Story = {
  render: () => ({
    setup() {
      const value = ref<string>(names[8]);

      return () =>
        h(CSelect, {
          style,
          modelValue: value.value,
          options: names.map((name) => ({ label: name, value: name })),
          "onUpdate:value": (v: string) => (value.value = v),
        });
    },
  }),
};

export const Label: Story = {
  render: () => ({
    setup() {
      const value = ref<string>(names[8]);

      return () =>
        h(CSelect, {
          style,
          modelValue: value.value,
          options: names.map((name) => ({ label: name, value: name })),
          label: "Label",
          "onUpdate:value": (v: string) => (value.value = v),
        });
    },
  }),
};

export const Disabled: Story = {
  render: () => ({
    setup() {
      const value = ref<string>(names[8]);

      return () =>
        h(CSelect, {
          style,
          modelValue: value.value,
          options: names.map((name) => ({ label: name, value: name })),
          disabled: true,
          label: "Label",
          "onUpdate:value": (v: string) => (value.value = v),
        });
    },
  }),
};

export const Custom: Story = {
  render: () => ({
    setup() {
      const value = ref<string>(names[8]);
      const options = names.map((name) => ({
        label: name,
        value: name,
        render: (value) => h("strong", value),
      }));

      return () =>
        h(CSelect, {
          style,
          modelValue: value.value,
          options,
          label: "Label",
          "onUpdate:value": (v: string) => (value.value = v),
        });
    },
  }),
};
