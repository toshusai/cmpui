<script setup lang="ts">
defineProps<{
  clickable?: boolean;
  rounded?: boolean;
  size?: "S" | "M" | "L";
}>();
</script>
<template>
  <div
    class="cmpui__chip"
    :data-clickable="clickable"
    :data-rounded="rounded"
    :data-size="size"
    v-bind="$attrs"
  >
    <slot></slot>
  </div>
</template>
