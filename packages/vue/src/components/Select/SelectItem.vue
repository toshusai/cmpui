<script setup lang="ts">
import MenuListItem from "../MenuListItem/MenuListItem.vue";

withDefaults(
  defineProps<{
    disabled?: boolean;
    value?: string;
  }>(),
  {
    disabled: false,
    value: undefined,
  },
);
</script>

<template>
  <MenuListItem
    :disabled="disabled"
    :data-value="value"
    role="option"
    v-bind="$attrs"
  >
    <slot></slot>
  </MenuListItem>
</template>
