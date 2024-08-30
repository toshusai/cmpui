import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import CButton from "../CButton/CButton.vue";
import Popover from "./Popover.vue";
import MenuList from "../MenuList/MenuList.vue";
import MenuListItem from "../MenuListItem/MenuListItem.vue";

const meta = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

const html = String.raw;
export const Default: Story = {
  render: () => ({
    setup() {
      const trigger = ref<InstanceType<typeof CButton> | null>(null);

      const show = ref(false);

      const selected = ref<string | null>(null);

      const handleSelect = (v: string) => {
        selected.value = v;
        show.value = false;
      };

      return {
        trigger,
        show,
        selected,
        handleSelect,
      };
    },
    components: { Popover, CButton, MenuList, MenuListItem },
    template: html`
      <CButton ref="trigger" @click="show = true">
        {{ selected || "Select" }}
      </CButton>
      <Popover
        v-if="show"
        :trigger="trigger?.$el"
        :show="show"
        @close="show = false"
      >
        <MenuList @select="handleSelect">
          <MenuListItem value="Option A">Option A</MenuListItem>
          <MenuListItem value="Option B">Option B</MenuListItem>
          <MenuListItem value="Option C">Option C</MenuListItem>
        </MenuList>
      </Popover>
    `,
  }),
};
