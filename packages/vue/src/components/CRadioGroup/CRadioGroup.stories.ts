import type { Meta, StoryObj } from "@storybook/vue3";
import { h } from "vue";
import CRadioGroup from "./CRadioGroup.vue";

import StoryCRadioGroupBasic from "./stories/StoryCRadioGroupBasic.vue";
import { IconBuildingBank, IconCash, IconCreditCard } from "@tabler/icons-vue";

const meta = {
  title: "inputs/CRadioGroup",
  component: CRadioGroup,
} satisfies Meta<typeof CRadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () =>
    h(StoryCRadioGroupBasic, {
      options: [
        {
          label: "Daily",
          value: "daily",
        },
        {
          label: "Weekly",
          value: "weekly",
        },
        {
          label: "Monthly",
          value: "monthly",
        },
      ],
    }),
};

export const Disabled: Story = {
  render: () =>
    h(StoryCRadioGroupBasic, {
      options: [
        {
          label: "Daily",
          value: "daily",
        },
        {
          label: "Weekly",
          value: "weekly",
          disabled: true,
        },
        {
          label: "Monthly",
          value: "monthly",
        },
      ],
    }),
};

export const CustomOptions: Story = {
  render: () => {
    const spanStyle = {
      display: "flex",
      alignItems: "center",
      gap: "4px",
    };
    return h(StoryCRadioGroupBasic, {
      options: [
        {
          label: () =>
            h("span", { style: spanStyle }, [
              h(IconCash, { size: 16 }),
              "Cash",
            ]),
          value: "cash",
        },
        {
          label: () =>
            h("span", { style: spanStyle }, [
              h(IconBuildingBank, { size: 16 }),
              "Bank",
            ]),
          value: "bank",
        },
        {
          label: () =>
            h("span", { style: spanStyle }, [
              h(IconCreditCard, { size: 16 }),
              "Credit card",
            ]),
          value: "credit",
        },
      ],
    });
  },
};
