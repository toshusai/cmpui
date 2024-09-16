<script setup lang="ts">
import {
  createDragHandler,
  matrixToCss,
  px,
  radToDeg,
  createResizeHandler,
} from "@toshusai/cmpui-core";
import { computed, ref } from "vue";
import { corners } from "@toshusai/cmpui-core";
import CCircle from "../CCircle/CCircle.vue";

import { RectGizmoProps } from "@toshusai/cmpui-core";
import { createEdgeHandler, createEdgeStyle } from "@toshusai/cmpui-core";
import { createStepped } from "@toshusai/cmpui-core";
import { createRotateHandler, createRotateStyle } from "@toshusai/cmpui-core";
import { whIndexToCornerName } from "@toshusai/cmpui-core";

const props = defineProps<RectGizmoProps>();

const emit = defineEmits<{
  (_e: "change", props: RectGizmoProps): void;
}>();

const matrix = computed(() =>
  new DOMMatrix()
    .translate(props.position.x, props.position.y)
    .rotate(0, 0, radToDeg(props.rotation))
    .scale(props.scale.x, props.scale.y)
    .translate(-props.origin.x, -props.origin.y),
);

const invertScaleCss = computed(() => {
  const invertScale = new DOMMatrix().scale(
    1 / props.scale.x,
    1 / props.scale.y,
  );
  return matrixToCss(invertScale);
});

const handleChange = (v: Partial<RectGizmoProps>) => {
  emit("change", {
    width: v.width ?? props.width,
    height: v.height ?? props.height,
    scale: v.scale ?? props.scale,
    rotation: v.rotation ?? props.rotation,
    position: v.position ?? props.position,
    origin: v.origin ?? props.origin,
  });
};
const centerRef = ref<HTMLElement | null>(null);
</script>

<template>
  <div
    class="cmpui_rect-gizmo"
    :style="{
      transform: matrixToCss(matrix),
      width: px(props.width),
      height: px(props.height),
    }"
  >
    <div
      @pointerdown="
        (e) =>
          createDragHandler({
            onDown() {
              return JSON.parse(JSON.stringify(props));
            },
            onMove(_, propsWhenDown, move) {
              if (!propsWhenDown) return;
              handleChange({
                position: {
                  x: propsWhenDown.position.x + move.dx,
                  y: propsWhenDown.position.y + move.dy,
                },
              });
            },
          })(e)
      "
    >
      <slot />
    </div>

    <div
      ref="centerRef"
      class="cmpui_rect-gizmo-origin"
      :style="{
        left: px(props.origin.x),
        top: px(props.origin.y),
        transform: invertScaleCss,
      }"
    >
      <div></div>
    </div>

    <div
      v-for="([w, h], i) in corners"
      :key="i"
      :style="createEdgeStyle(w, h, i, 8, scale)"
      :class="`cmpui_rect-gizmo-edge step-${createStepped(rotation, i, 0)}`"
      :data-pos="'lbrt'[i]"
      @pointerdown="
        (e) =>
          createEdgeHandler(props, w, h, (x, y) => {
            handleChange({
              scale: { x, y },
            });
          })(e)
      "
    ></div>

    <div
      v-for="([w, h], i) in corners"
      :key="i"
      :style="createRotateStyle(w, h, scale)"
      :class="`cmpui_rect-gizmo-corner step-${createStepped(
        rotation,
        i,
        -(Math.PI / 4) +
          (scale.x < 0 ? Math.PI / 2 : 0) +
          (scale.y < 0 ? Math.PI / 2 : 0),
      )}`"
      :data-pos="whIndexToCornerName(w, h)"
      @pointerdown="
        (e) =>
          createRotateHandler(
            rotation,
            (r) =>
              handleChange({
                rotation: r,
              }),
            centerRef!,
          )(e)
      "
    ></div>

    <CCircle
      v-for="([w, h], i) in corners"
      :key="i"
      :x="w * props.width"
      :y="h * props.height"
      :radius="4"
      fill="var(--cmpui-primary-color)"
      :style="{
        transform: invertScaleCss,
      }"
      :class="`cmpui_rect-gizmo-corner step-${createStepped(
        rotation,
        i,
        Math.PI / 4 +
          (scale.x < 0 ? Math.PI / 2 : 0) +
          (scale.y < 0 ? Math.PI / 2 : 0),
      )}`"
      @pointerdown="
        (e) =>
          createResizeHandler(props, w, h, (x, y) => {
            handleChange({
              scale: { x, y },
            });
          })(e)
      "
    />
  </div>
</template>
