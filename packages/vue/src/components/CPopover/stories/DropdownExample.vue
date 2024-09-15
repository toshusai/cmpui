<script setup lang="ts">
import { IconDots } from "@tabler/icons-vue";
import CIconButton from "../../CIconButton/CIconButton.vue";
import { ref } from "vue";
import CPopover from "../CPopover.vue";
import CMenuList from "../../CMenuList/CMenuList.vue";
import CMenuListItem from "../../CMenuListItem/CMenuListItem.vue";
import { codeWords } from "../../../test/const";

const trigger = ref<InstanceType<typeof CIconButton> | null>(null);

const show = ref(false);

const selected = ref<string | null>(null);

const handleSelect = (v: string) => {
  selected.value = v;
  show.value = false;
};

const options = codeWords.slice(0, 5);
</script>

<template>
  <div>Selected: {{ selected ?? "null" }}</div>
  <CIconButton ref="trigger" bordered @click="show = true">
    <IconDots size="20" />
  </CIconButton>
  <CPopover
    placement="bottom-start"
    :trigger="trigger?.$el"
    :show="show"
    @close="show = false"
  >
    <CMenuList @select="handleSelect">
      <CMenuListItem v-for="option in options" :key="option" :value="option">
        {{ option }}
      </CMenuListItem>
    </CMenuList>
  </CPopover>
</template>
