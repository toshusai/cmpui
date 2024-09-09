<script setup lang="ts">
import MenuListItem from "../../../MenuListItem/MenuListItem.vue";
import SubMenuPopover from "../../SubMenuPopover.vue";
import { useSubMenuPopover } from "../../useSubMenuPopover";
import SubMenuItem from "./SubMenuItem.vue";

const emit = defineEmits<{
  (_e: "select", _v: string): void;
}>();

const popover3 = useSubMenuPopover();
</script>

<template>
  <MenuListItem
    is="button"
    @focus="popover3.close"
    @click="emit('select', 'Delta')"
  >
    Delta
  </MenuListItem>
  <MenuListItem
    is="button"
    @click="emit('select', 'Echo')"
    @focus="popover3.close"
  >
    Echo
  </MenuListItem>

  <!-- SubMenu3 -->
  <MenuListItem
    :ref="popover3.triggerBind"
    data-testid="submenu3"
    @focus="popover3.pointerEnter()"
    @blur="popover3.pointerLeave()"
  >
    <SubMenuItem>SubMenu3</SubMenuItem>
  </MenuListItem>

  <SubMenuPopover
    v-if="popover3.show.value"
    :trigger="popover3.trigger.value"
    :show="popover3.show.value"
    @close="popover3.close"
  >
    <MenuListItem is="button" @click="emit('select', 'Foxtrot')"
      >Foxtrot</MenuListItem
    >
    <MenuListItem is="button" @click="emit('select', 'Golf')"
      >Golf</MenuListItem
    >
  </SubMenuPopover>
</template>
