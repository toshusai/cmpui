import type { Meta, StoryObj } from "@storybook/vue3";
import CTextInput from "./CTextInput.vue";
import { h, ref } from "vue";
import { IconCurrencyDollar, IconEye, IconEyeOff } from "@tabler/icons-vue";
import CIconButton from "../CIconButton/CIconButton.vue";

const meta = {
  title: "inputs/CTextInput",
  component: CTextInput,
  args: {
    label: "",
    disabled: false,
  },
} satisfies Meta<typeof CTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Label: Story = {
  args: {
    label: "Label",
  },
};

export const Disabled: Story = {
  args: {
    label: "Label",
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    label: "Error",
    invalid: true,
  },
};

export const Prefix: Story = {
  args: {
    label: "Amount",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
