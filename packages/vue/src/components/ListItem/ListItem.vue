<script setup lang="ts">
withDefaults(
  defineProps<{
    is?: string;
    rounded?: boolean;
    selected?: boolean;
    size?: "S" | "M" | "L";
  }>(),
  {
    is: "li",
    size: "M",
  },
);
</script>

<template>
  <component
    :is="is"
    class="cmpui_list-item__root"
    :data-size="size"
    :data-rounded="rounded"
    :aria-selected="selected"
    v-bind="$attrs"
  >
    <slot></slot>
  </component>
</template>
