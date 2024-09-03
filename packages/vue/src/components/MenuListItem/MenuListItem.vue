<script setup lang="ts">
import ListItem from "../ListItem/ListItem.vue";

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
  <ListItem
    :is="is"
    :data-size="size"
    :data-rounded="rounded"
    :aria-selected="selected"
    :data-value="value"
    tabindex="0"
    v-bind="$attrs"
  >
    <slot></slot>
  </ListItem>
</template>
