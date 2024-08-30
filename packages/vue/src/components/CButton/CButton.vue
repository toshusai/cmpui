<script setup lang="ts">
import { CButtonProps } from "./type";

withDefaults(defineProps<CButtonProps>(), {
  variant: "primary",
  size: "M",
  disabled: false,
});
</script>

<template>
  <button
    class="cmpui_button"
    :data-variant="variant"
    :data-size="size"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>
