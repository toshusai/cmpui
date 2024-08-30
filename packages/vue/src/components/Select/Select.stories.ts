import type { Meta, StoryObj } from "@storybook/vue3";
import CSelect from "./CSelect.vue";
import { ref } from "vue";

const meta = {
  title: "Components/CSelect",
  component: CSelect,
  tags: ["autodocs"],
} satisfies Meta<typeof CSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const html = String.raw;
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
      const value = ref<string>(names[8]);
      return {
        names,
        value,
      };
    },
    components: { CSelect },
    template: html`
      <CSelect
        :value="value"
        :options="names.map((name) => ({ label: name, value: name }))"
        @change="(v) => (value = v)"
      ></CSelect>
    `,
  }),
};

export const Label: Story = {
  render: () => ({
    setup() {
      const value = ref<string>(names[8]);
      return {
        names,
        value,
      };
    },
    components: { CSelect },
    template: html`
      <CSelect
        :value="value"
        :options="names.map((name) => ({ label: name, value: name }))"
        label="Label"
        @change="(v) => (value = v)"
      ></CSelect>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    setup() {
      const value = ref<string>(names[8]);
      return {
        names,
        value,
      };
    },
    components: { CSelect },
    template: html`
      <CSelect
        disabled
        :value="value"
        :options="names.map((name) => ({ label: name, value: name }))"
        label="Label"
        @change="(v) => (value = v)"
      ></CSelect>
    `,
  }),
};
