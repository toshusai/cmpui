import type { Meta, StoryObj } from "@storybook/vue3";
import CSelect from "./CSelect.vue";
import { h, ref } from "vue";
import { codeWords } from "../../test/const";

const meta = {
  title: "inputs/CSelect",
  component: CSelect,
} satisfies Meta<typeof CSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const style = {
  transform: `translateY(-64px)`,
};

const options = codeWords.map((word) => ({ label: word, value: word }));

export const Default: Story = {
  render: () => ({
    setup() {
      const value = ref<string>(codeWords[8]);

      return () =>
        h(CSelect, {
          style,
          modelValue: value.value,
          options,
          "onUpdate:value": (v: string) => (value.value = v),
        });
    },
  }),
};

export const Label: Story = {
  render: () => ({
    setup() {
      const value = ref<string>(codeWords[8]);

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

export const Disabled: Story = {
  render: () => ({
    setup() {
      const value = ref<string>(codeWords[8]);

      return () =>
        h(CSelect, {
          style,
          modelValue: value.value,
          options,
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
      const value = ref<string>(codeWords[8]);
      const options = codeWords.map((name) => ({
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
