<script setup lang="ts">
import { ref } from "vue";
import CDrawer from "../CDrawer.vue";
import ListItem from "../../ListItem/ListItem.vue";
import CIconButton from "../../CIconButton/CIconButton.vue";
import {
  IconX,
  IconHome,
  IconSearch,
  IconNotification,
  IconFlame,
  IconLayoutSidebarLeftExpand,
  IconLayoutSidebarRightExpand,
} from "@tabler/icons-vue";

const props = defineProps<{
  position?: "left" | "right";
}>();
const show = ref(false);
</script>

<template>
  <CDrawer :show="show" :position="props.position" @close="show = false">
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 40px;
        padding: 0 8px;
        box-sizing: border-box;
      "
      :style="{ direction: props.position === 'right' ? 'rtl' : 'ltr' }"
    >
      <a style="font-size: 16px; padding: 0 8px; font-weight: bold"> Brand </a>
      <CIconButton @click="show = false">
        <IconX size="16" />
      </CIconButton>
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
  </CDrawer>
  <CIconButton @click="show = true">
    <IconLayoutSidebarLeftExpand
      v-if="position === undefined || position === 'left'"
      size="16"
    />
    <IconLayoutSidebarRightExpand v-else size="16" />
  </CIconButton>
</template>
