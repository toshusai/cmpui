import type { Meta, StoryObj } from "@storybook/vue3";
import CCheckbox from "./CCheckbox.vue";
import { h, ref } from "vue";

const meta = {
  title: "inputs/CCheckbox",
  args: {
    label: "Checkbox",
  },
  component: CCheckbox,
} satisfies Meta<typeof CCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Controlled: Story = {
  render: () => {
    return {
      setup() {
        const checked = ref(true);
        return () =>
          h(() => [
            h("div", `Checked: ${checked.value}`),
            h(CCheckbox, {
              modelValue: checked.value,
              "onUpdate:modelValue": (v) => {
                checked.value = v;
              },
              label: "Controlled",
            }),
          ]);
      },
    };
  },
};

export const Checked: Story = {
  render: () => h(CCheckbox, { checked: true, label: "Checked" }),
};

export const CustomLabel: Story = {
  render: () =>
    h(CCheckbox, {
      checked: true,
      label: h("span", [h("b", "Custom"), " Label"]),
    }),
};

export const Disabled: Story = {
  render: () => h(CCheckbox, { disabled: true, label: "Disabled" }),
};

export const Sizes: Story = {
  render: () =>
    h(() => [
      h(CCheckbox, { size: "S", label: "Small" }),
      h(CCheckbox, { size: "M", label: "Medium" }),
    ]),
};
