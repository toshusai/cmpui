<script setup lang="ts">
const value = defineModel<string>();
defineProps<{ size?: "L" | "M" }>();
</script>

<template>
  <input
    v-model="value"
    class="cmpui_radio__input"
    type="radio"
    :data-size="size"
    v-bind="$attrs"
  />
</template>
