<script setup lang="ts">
withDefaults(
  defineProps<{
    is?: string;
    rounded?: boolean;
    selected?: boolean;
    size?: "S" | "M";
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
    :daat-rounded="rounded"
    :aria-selected="selected"
    v-bind="$attrs"
  >
    <slot></slot>
  </component>
</template>
