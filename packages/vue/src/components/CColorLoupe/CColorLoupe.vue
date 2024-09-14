<script setup lang="ts">
import CLine from "../CLine/CLine.vue";
import CCircle from "../CCircle/CCircle.vue";

export interface ColorLoupeProps {
  color: string;
  nobRadius?: number;
  x: number;
  y: number;
}

withDefaults(defineProps<ColorLoupeProps>(), {
  nobRadius: 4,
});
</script>

<template>
  <CLine
    stroke="var(--cmpui-border-color)"
    :stroke-width="1"
    :x1="x"
    :x2="x"
    :y1="y - nobRadius"
    :y2="y - nobRadius * 4"
  />
  <CCircle
    fill="white"
    :radius="nobRadius * 2"
    stroke-color="var(--cmpui-border-color)"
    stroke-width="1"
    :style="{ zIndex: 1, '--block-size': '4px' }"
    :x="x"
    :y="y - nobRadius * 4"
    class="alpha-checker-board"
  />
  <CCircle
    :fill="color"
    :radius="nobRadius * 2"
    stroke-color="var(--cmpui-border-color)"
    stroke-width="1"
    :style="{ zIndex: 1 }"
    :x="x"
    :y="y - nobRadius * 4"
  />
</template>
