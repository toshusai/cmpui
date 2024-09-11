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
const value = defineModel<boolean>("checked");
</script>

<template>
  <input
    v-model="value"
    type="checkbox"
    class="cmpui_checkbox__input"
    :disabled="disabled"
    :data-size="size"
    :checked="value"
    v-bind="$attrs"
  />
</template>
