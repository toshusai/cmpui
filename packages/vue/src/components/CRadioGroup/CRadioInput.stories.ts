import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import CRadioInput from "./CRadioInput.vue";

const meta = {
  title: "inputs/CRadioInput",
  component: CRadioInput,
} satisfies Meta<typeof CRadioInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const html = String.raw;

export const Default: Story = {
  render: () => ({
    setup() {
      const picked = ref("");
      return {
        picked,
      };
    },
    components: { CRadioInput },
    template: html`
      <div style="width: 256px">picked: {{picked}}</div>
      <CRadioInput id="a" v-model="picked" value="A" name="input"></CRadioInput>
      <CRadioInput id="b" v-model="picked" value="B" name="input"></CRadioInput>
    `,
  }),
};

export const Checked: Story = {
  render: () => ({
    setup() {},
    components: { CRadioInput },
    template: html`<CRadioInput name="input" checked></CRadioInput> `,
  }),
};
