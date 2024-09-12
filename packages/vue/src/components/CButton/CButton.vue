<script setup lang="ts">
import { CButtonProps } from "./type";

withDefaults(defineProps<CButtonProps>(), {
  variant: "primary",
  size: "M",
  disabled: false,
  bordered: false,
});
</script>

<template>
  <button
    class="cmpui_button"
    :data-variant="variant"
    :data-size="size"
    :disabled="disabled"
    :data-bordered="bordered"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>
