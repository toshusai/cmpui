import type { Meta, StoryObj } from "@storybook/vue3";
import CAutoComplete from "./CAutoComplete.vue";
import { h } from "vue";

const meta = {
  title: "inputs/CAutoComplete",
  component: CAutoComplete,
} satisfies Meta<typeof CAutoComplete>;

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
export const Default: Story = {
  render: () => ({
    setup() {
      return () =>
        h(() => [
          h(CAutoComplete, {
            options: names.map((name) => ({ label: name, value: name })),
          }),
        ]);
    },
  }),
};
