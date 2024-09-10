<script setup lang="ts">
import CMenuListItem from "../../../CMenuListItem/CMenuListItem.vue";
import CSubMenuPopover from "../../CSubMenuPopover.vue";
import { useSubMenuPopover } from "../../useSubMenuPopover";
import SubMenu2 from "./SubMenu2MenuItems.vue";
import SubMenuItem from "./SubMenuItem.vue";

const emit = defineEmits<{
  (_e: "select", _v: string): void;
}>();

const popover1 = useSubMenuPopover();
const popover2 = useSubMenuPopover();
</script>

<template>
  <CMenuListItem
    is="button"
    @focus="
      popover1.close();
      popover2.close();
    "
    @click="emit('select', 'Alpha')"
  >
    Alpha
  </CMenuListItem>

  <!-- SubMenu1 -->
  <CMenuListItem
    :ref="popover1.triggerBind"
    @focus="
      popover1.pointerEnter();
      popover2.close();
    "
    @blur="popover1.pointerLeave()"
  >
    <SubMenuItem>SubMenu1</SubMenuItem>
  </CMenuListItem>

  <CSubMenuPopover
    v-if="popover1.show.value"
    :trigger="popover1.trigger.value"
    @close="popover1.close"
  >
    <CMenuListItem is="button" @click="emit('select', 'Beta')"
      >Beta</CMenuListItem
    >
    <CMenuListItem is="button" @click="emit('select', 'Charlie')"
      >Charlie</CMenuListItem
    >
  </CSubMenuPopover>

  <CMenuListItem
    :ref="
      (el) => popover2.triggerBind(el as InstanceType<typeof CMenuListItem>)
    "
    @focus="
      popover2.pointerEnter();
      popover1.close();
    "
    @blur="popover2.pointerLeave()"
  >
    <SubMenuItem>SubMenu2</SubMenuItem>
  </CMenuListItem>

  <CSubMenuPopover
    v-if="popover2.show.value"
    :trigger="popover2.trigger.value"
    :show="popover2.show.value"
    @close="popover2.close"
  >
    <SubMenu2 @select="(v) => emit('select', v)" />
  </CSubMenuPopover>
</template>
