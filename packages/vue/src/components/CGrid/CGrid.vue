<script setup lang="ts">
withDefaults(
  defineProps<{
    offsetX?: number;
    offsetY?: number;
    sizeX?: number;
    sizeY?: number;
    color?: string;
  }>(),
  {
    offsetX: 0,
    offsetY: 0,
    sizeX: 50,
    sizeY: 50,
    color: undefined,
  },
);
</script>

<template>
  <div
    class="cmpui_grid__root"
    :style="{
      '--cmpui-offset-x': `${offsetX}px`,
      '--cmpui-offset-y': `${offsetY}px`,
      '--cmpui-size-x': `${sizeX}px`,
      '--cmpui-size-y': `${sizeY}px`,
      '--cmpui-color': color,
    }"
  />
</template>
