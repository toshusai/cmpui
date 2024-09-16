import type { Meta, StoryObj } from "@storybook/vue3";
import CAutoComplete from "./CAutoComplete.vue";
import { h } from "vue";
import AutoCompleteExample from "./stories/AutoCompleteExample.vue";
import { codeWords } from "../../test/const";

const meta = {
  title: "inputs/CAutoComplete",
  component: CAutoComplete,
} satisfies Meta<typeof CAutoComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    setup() {
      return () =>
        h(() => [
          h(CAutoComplete, {
            options: codeWords.map((word) => ({ label: word, value: word })),
          }),
        ]);
    },
  }),
};

export const Example: Story = {
  render: () => ({
    setup() {
      return () => h(AutoCompleteExample);
    },
  }),
};
