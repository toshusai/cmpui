<script setup lang="ts">
import { IconButtonProps } from "./type";

withDefaults(defineProps<IconButtonProps>(), {
  size: "M",
});
</script>

<template>
  <button
    class="cmpui_icon-button__root"
    :aria-selected="selected"
    :data-size="size"
    :disabled="disabled"
    :data-rounded="rounded"
    :data-bordered="bordered"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>
