import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import CRadioInputWithLabel from "./CRadioInputWithLabel.vue";

const meta = {
  component: CRadioInputWithLabel,
} satisfies Meta<typeof CRadioInputWithLabel>;

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
    components: { CRadioInputWithLabel },
    template: html`
      <div style="width: 256px">picked: {{picked}}</div>
      <CRadioInputWithLabel id="a" v-model="picked" value="A" name="input">
        A
      </CRadioInputWithLabel>
      <CRadioInputWithLabel id="b" v-model="picked" value="B" name="input">
        B
      </CRadioInputWithLabel>
    `,
  }),
};
