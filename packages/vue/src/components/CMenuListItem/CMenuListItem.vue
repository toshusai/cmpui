<script setup lang="ts">
import CListItem from "../CListItem/CListItem.vue";

withDefaults(
  defineProps<{
    is?: string;
    rounded?: boolean;
    selected?: boolean;
    value?: string;
    size?: "S" | "M" | "L";
  }>(),
  {
    is: "li",
    size: "M",
    value: undefined,
  },
);
</script>

<template>
  <CListItem
    :is="is"
    :data-size="size"
    :data-rounded="rounded"
    :aria-selected="selected"
    :data-value="value"
    tabindex="0"
    v-bind="$attrs"
  >
    <slot></slot>
  </CListItem>
</template>
