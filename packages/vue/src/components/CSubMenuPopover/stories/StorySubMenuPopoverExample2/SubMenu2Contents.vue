<script setup lang="ts">
import CMenuListItem from "../../../CMenuListItem/CMenuListItem.vue";
import CSubMenuPopover from "../../CSubMenuPopover.vue";
import { useSubMenuPopover } from "../../useSubMenuPopover";
import SubMenuItem from "./SubMenuItem.vue";

const emit = defineEmits<{
  (_e: "select", _v: string): void;
}>();

const popover3 = useSubMenuPopover();
</script>

<template>
  <CMenuListItem
    is="button"
    @focus="popover3.close"
    @click="emit('select', 'Delta')"
  >
    Delta
  </CMenuListItem>
  <CMenuListItem
    is="button"
    @click="emit('select', 'Echo')"
    @focus="popover3.close"
  >
    Echo
  </CMenuListItem>

  <!-- SubMenu3 -->
  <CMenuListItem
    :ref="popover3.triggerBind"
    data-testid="submenu3"
    @focus="popover3.pointerEnter()"
    @blur="popover3.pointerLeave()"
  >
    <SubMenuItem>SubMenu3</SubMenuItem>
  </CMenuListItem>

  <CSubMenuPopover
    v-if="popover3.show.value"
    :trigger="popover3.trigger.value"
    :show="popover3.show.value"
    @close="popover3.close"
  >
    <CMenuListItem is="button" @click="emit('select', 'Foxtrot')"
      >Foxtrot</CMenuListItem
    >
    <CMenuListItem is="button" @click="emit('select', 'Golf')"
      >Golf</CMenuListItem
    >
  </CSubMenuPopover>
</template>
