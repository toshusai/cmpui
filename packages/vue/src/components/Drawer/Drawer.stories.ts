import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Drawer from "./Drawer.vue";
import CButton from "../CButton/CButton.vue";
import ListItem from "../ListItem/ListItem.vue";
import IconButton from "../IconButton/IconButton.vue";
import {
  IconX,
  IconHome,
  IconSearch,
  IconNotification,
  IconFlame,
} from "@tabler/icons-vue";

const meta = {
  component: Drawer,
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const html = String.raw;
export const Default: Story = {
  render: () => ({
    setup() {
      const show = ref(false);
      return {
        show,
      };
    },
    components: {
      Drawer,
      CButton,
      ListItem,
      IconButton,
      IconX,
      IconFlame,
      IconHome,
      IconSearch,
      IconNotification,
    },
    template: html`
      <Drawer :show="show" @close="show = false">
        <div
          style="display: flex; align-items: center; justify-content: space-between; width: 100%; height: 40px; padding: 0 8px 0 16px; box-sizing: border-box;"
        >
          <a style="font-size: 16px; font-weight: bold;"> Brand </a>
          <IconButton @click="show = false">
            <IconX size="16" />
          </IconButton>
        </div>
        <ListItem>
          <IconHome size="16" style="margin-right: 8px" />
          Home
        </ListItem>
        <ListItem>
          <IconSearch size="16" style="margin-right: 8px" />
          Explore
        </ListItem>
        <ListItem>
          <IconNotification size="16" style="margin-right: 8px" />
          Notification
        </ListItem>
        <ListItem>
          <IconFlame size="16" style="margin-right: 8px" />
          Trend
        </ListItem>
      </Drawer>
      <CButton @click="show = true">Open</CButton>
    `,
  }),
};
