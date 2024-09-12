import { type Meta, type StoryObj } from "@storybook/vue3";
import CMenuList from "./CMenuList.vue";
import { h, ref } from "vue";
import CMenuListItem from "../CMenuListItem/CMenuListItem.vue";

const meta = {
  title: "data display/CMenuList",
  component: CMenuList,
} satisfies Meta<typeof CMenuList>;

export default meta;
type Story = StoryObj<typeof meta>;

const names = ["Alfa", "Bravo", "Charlie", "Delta", "Echo"];
export const Default: Story = {
  render: () => ({
    setup() {
      const value = ref<string>(names[3]);
      return () => [
        h("div", `Selected: ${value.value}`),
        h(
          CMenuList,
          {
            style: { width: "fit-content" },
            onSelect: (v: string) => (value.value = v),
          },
          () =>
            names.map((name) =>
              h(
                CMenuListItem,
                {
                  key: name,
                  value: name,
                  selected: value.value === name,
                },
                () => name,
              ),
            ),
        ),
      ];
    },
  }),
};
