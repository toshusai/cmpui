import type { Meta, StoryObj } from "@storybook/vue3";
import CTextInput from "./CTextInput.vue";
import { h, ref } from "vue";
import { IconCurrencyDollar, IconEye, IconEyeOff } from "@tabler/icons-vue";
import CIconButton from "../CIconButton/CIconButton.vue";

const meta = {
  title: "inputs/CTextInput",
  component: CTextInput,
} satisfies Meta<typeof CTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
  },
};

export const Label: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
  },
};

export const Disabled: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    label: "Error",
    placeholder: "Placeholder",
    invalid: true,
  },
};

export const Prefix: Story = {
  args: {
    label: "Amount",
    placeholder: "1.0",
    type: "number",
    prefix: () =>
      h(IconCurrencyDollar, {
        size: 16,
        style: { margin: "0 4px", minWidth: "16px" },
      }),
  },
};

export const Suffix: Story = {
  render: () => {
    return {
      setup() {
        const showPassword = ref(false);
        return () =>
          h(
            CTextInput,
            {
              label: "Password",
              modelValue: "NN2mdJec,Ff+^[a",
              type: showPassword.value ? "text" : "password",
              placeholder: "password",
            },
            {
              suffix: () =>
                h(
                  CIconButton,
                  {
                    size: "S",
                    style: { marginRight: "4px" },
                    onClick: () => {
                      showPassword.value = !showPassword.value;
                    },
                  },
                  () =>
                    h(showPassword.value ? IconEyeOff : IconEye, {
                      size: 16,
                      style: { margin: "0 4px", minWidth: "16px" },
                    }),
                ),
            },
          );
      },
    };
  },
};
