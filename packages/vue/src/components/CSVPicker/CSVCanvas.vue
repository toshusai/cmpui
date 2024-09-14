<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from "vue";
import {
  createPointerDownHandler,
  drawSV,
  initSVCanvas,
} from "@toshusai/cmpui-core";

const props = defineProps<{
  width: number;
  height: number;
  hue: number;
}>();

const emit = defineEmits<{
  (_: "change", s: number, v: number): void;
}>();

const canvasRef = ref<HTMLCanvasElement | null>(null);

let ctx: CanvasRenderingContext2D | null = null;
onMounted(() => {
  if (!canvasRef.value) return;
  ctx = initSVCanvas(canvasRef.value);
  drawSV(ctx, props.hue);
});

watchEffect(() => {
  if (!ctx) return;
  drawSV(ctx, props.hue);
});

const pointerdown = computed(() => {
  if (!canvasRef.value) return;
  return createPointerDownHandler({
    width: props.width,
    height: props.height,
    onChange: (s, v) => emit("change", s, v),
    onDownChange: () => {},
  });
});
</script>
<template>
  <canvas
    ref="canvasRef"
    :width="width"
    :height="height"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
    }"
    @pointerdown="pointerdown"
  />
</template>
