<script setup lang="ts">
import { ButtonProps } from "./type";

withDefaults(defineProps<ButtonProps>(), {
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
  >
    <slot></slot>
  </button>
</template>
