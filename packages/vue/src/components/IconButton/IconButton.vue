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
    :data-border="border"
  >
    <slot></slot>
  </button>
</template>
