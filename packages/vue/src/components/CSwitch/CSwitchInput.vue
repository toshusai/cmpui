<script setup lang="ts">
withDefaults(
  defineProps<{
    disabled?: boolean;
    size?: "S" | "M" | "L";
  }>(),
  {
    disabled: undefined,
    size: undefined,
  },
);
</script>

<template>
  <input
    type="checkbox"
    class="cmpui_switch__input"
    :disabled="disabled"
    :data-size="size"
    v-bind="$attrs"
  />
</template>
