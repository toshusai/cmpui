<script setup lang="ts">
import MenuListItem from "../../../MenuListItem/MenuListItem.vue";
import SubMenuPopover from "../../SubMenuPopover.vue";
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
  <MenuListItem
    is="button"
    @focus="
      popover1.close();
      popover2.close();
    "
    @click="emit('select', 'Alpha')"
  >
    Alpha
  </MenuListItem>

  <!-- SubMenu1 -->
  <MenuListItem
    :ref="popover1.triggerBind"
    @focus="
      popover1.pointerEnter();
      popover2.close();
    "
    @blur="popover1.pointerLeave()"
  >
    <SubMenuItem>SubMenu1</SubMenuItem>
  </MenuListItem>

  <SubMenuPopover
    v-if="popover1.show.value"
    :trigger="popover1.trigger.value"
    @close="popover1.close"
  >
    <MenuListItem is="button" @click="emit('select', 'Beta')"
      >Beta</MenuListItem
    >
    <MenuListItem is="button" @click="emit('select', 'Charlie')"
      >Charlie</MenuListItem
    >
  </SubMenuPopover>

  <MenuListItem
    :ref="(el) => popover2.triggerBind(el as InstanceType<typeof MenuListItem>)"
    @focus="
      popover2.pointerEnter();
      popover1.close();
    "
    @blur="popover2.pointerLeave()"
  >
    <SubMenuItem>SubMenu2</SubMenuItem>
  </MenuListItem>

  <SubMenuPopover
    v-if="popover2.show.value"
    :trigger="popover2.trigger.value"
    :show="popover2.show.value"
    @close="popover2.close"
  >
    <SubMenu2 @select="(v) => emit('select', v)" />
  </SubMenuPopover>
</template>
