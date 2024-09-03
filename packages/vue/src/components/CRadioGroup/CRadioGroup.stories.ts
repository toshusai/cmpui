import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import CRadioGroup from "./CRadioGroup.vue";

const meta = {
  component: CRadioGroup,
} satisfies Meta<typeof CRadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const html = String.raw;

export const Default: Story = {
  render: () => ({
    setup() {
      const picked = ref("");
      const options = [
        {
          label: "A",
          value: "A",
        },
        {
          label: "B",
          value: "B",
        },
      ];
      return {
        picked,
        options,
      };
    },
    components: { CRadioGroup },
    template: html`
      picked:{{picked}}
      <CRadioGroup name="radio" v-model="picked" :options="options" />
    `,
  }),
};

export const CustomOptions: Story = {
  render: () => ({
    setup() {
      const picked = ref("");
      const options = [
        {
          id: "id-a",
          label: "A",
          value: "A",
        },
        {
          id: "id-b",
          label: "B",
          value: "B",
        },
      ];
      return {
        picked,
        options,
      };
    },
    components: { CRadioGroup },
    template: html`
      picked:{{picked}}
      <CRadioGroup name="radio" v-model="picked" :options="options" />
    `,
  }),
};
