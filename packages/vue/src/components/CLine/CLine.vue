<script setup lang="ts">
import { computed, CSSProperties } from "vue";

export type CircleProps = {
  strokeWidth: number;
  stroke: string;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
};

const props = defineProps<CircleProps>();

const width = Math.abs(props.x2 - props.x1);
const height = Math.abs(props.y2 - props.y1);
const padding = props.strokeWidth;
const style = computed(() => {
  return {
    position: "absolute",
    overflow: "visible",
    pointerEvents: "none",
    left: Math.min(props.x1, props.x2) - padding / 2,
    top: Math.min(props.y1, props.y2) - padding / 2,
  } as CSSProperties;
});
</script>

<template>
  <svg
    v-bind="$attrs"
    :style="style"
    :width="width + padding"
    :height="height + padding"
    :view-box="`0 0 ${width + padding} ${height + padding}`"
  >
    <line
      :stroke="props.stroke"
      :stroke-width="props.strokeWidth"
      :x1="x1 - Math.min(x1, x2) + padding / 2"
      :y1="y1 - Math.min(y1, y2) + padding / 2"
      :x2="x2 - Math.min(x1, x2) + padding / 2"
      :y2="y2 - Math.min(y1, y2) + padding / 2"
    ></line>
  </svg>
</template>
