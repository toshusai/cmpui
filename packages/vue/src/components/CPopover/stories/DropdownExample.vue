<script setup lang="ts">
import { IconDots } from "@tabler/icons-vue";
import CIconButton from "../../CIconButton/CIconButton.vue";
import { ref } from "vue";
import CPopover from "../CPopover.vue";
import CMenuList from "../../CMenuList/CMenuList.vue";
import CMenuListItem from "../../CMenuListItem/CMenuListItem.vue";

const trigger = ref<InstanceType<typeof CIconButton> | null>(null);

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
    <CIconButton ref="trigger" bordered @click="show = true">
      <IconDots size="20" />
    </CIconButton>
  </div>
  <CPopover
    v-if="show"
    placement="bottom-start"
    :trigger="trigger?.$el"
    :show="show"
    @close="show = false"
  >
    <CMenuList @select="handleSelect">
      <CMenuListItem is="button" value="Alpha">Alpha</CMenuListItem>
      <CMenuListItem is="button" value="Beta">Beta</CMenuListItem>
      <CMenuListItem is="button" value="Gamma">Gamma</CMenuListItem>
    </CMenuList>
  </CPopover>
</template>
