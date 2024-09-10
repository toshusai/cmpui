<script setup lang="ts">
import { computed, CSSProperties } from "vue";

export type CircleProps = {
  x: number;
  y: number;
  radius: number;
  strokeColor?: string;
  strokeWidth?: string | number;
  fill?: string;
};

const props = defineProps<CircleProps>();

const style = computed(() => {
  return {
    "--cmpui-circle-nob-fill": props.fill,
    "--cmpui-circle-nob-radius": `${props.radius}px`,
    "--cmpui-circle-nob-stroke-color": props.strokeColor,
    "--cmpui-circle-nob-stroke-width": `${props.strokeWidth ?? 0}px`,
    left: `${props.x - props.radius}px`,
    top: `${props.y - props.radius}px`,
  } as CSSProperties;
});
</script>

<template>
  <div v-bind="$attrs" class="cmpui_circle__root" :style="style"></div>
</template>
