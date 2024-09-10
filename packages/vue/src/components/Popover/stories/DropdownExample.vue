<script setup lang="ts">
import { IconDots } from "@tabler/icons-vue";
import IconButton from "../../CIconButton/CIconButton.vue";
import { ref } from "vue";
import Popover from "../Popover.vue";
import MenuList from "../../MenuList/MenuList.vue";
import MenuListItem from "../../MenuListItem/MenuListItem.vue";

const trigger = ref<InstanceType<typeof IconButton> | null>(null);

const show = ref(false);

const selected = ref<string | null>(null);

const handleSelect = (v: string) => {
  selected.value = v;
  show.value = false;
};
</script>

<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
    "
  >
    <div>Selected: {{ selected ?? "null" }}</div>
    <IconButton ref="trigger" bordered @click="show = true">
      <IconDots size="20" />
    </IconButton>
  </div>
  <Popover
    v-if="show"
    placement="bottom-start"
    :trigger="trigger?.$el"
    :show="show"
    @close="show = false"
  >
    <MenuList @select="handleSelect">
      <MenuListItem is="button" value="Alpha">Alpha</MenuListItem>
      <MenuListItem is="button" value="Beta">Beta</MenuListItem>
      <MenuListItem is="button" value="Gamma">Gamma</MenuListItem>
    </MenuList>
  </Popover>
</template>
