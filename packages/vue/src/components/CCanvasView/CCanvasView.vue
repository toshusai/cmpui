<script setup lang="ts">
import {
  CanvasViewCursor,
  CanvasViewTransform,
  createPanDragHandler,
  handleWheelZoom,
  zoomView,
} from "@toshusai/cmpui-core";
import { computed, ref } from "vue";

type Props = {
  view: CanvasViewTransform;
  cursor?: CanvasViewCursor;
  minScale?: number;
  maxScale?: number;
  trackPadZoomScale?: number;
  trackPadMoveScaleX?: number;
  trackPadMoveScaleY?: number;
  pointerDownZoomScale?: number;
};

const emit = defineEmits(["changeView", "changeCursor"]);

const props = defineProps<Props>();

const el = ref<HTMLElement | null>(null);

const pointerdown = computed(() => {
  return (e: PointerEvent) => {
    if (props.cursor === CanvasViewCursor.ZoomIn) {
      if (!el.value) return;
      zoomView(
        el.value,
        e.pageX,
        e.pageY,
        props.pointerDownZoomScale ?? 100,
        {
          view: props.view,
          maxScale: props.maxScale,
          minScale: props.minScale,
        },
        (v) => emit("changeView", v),
      );
      return;
    } else if (props.cursor === CanvasViewCursor.ZoomOut) {
      if (!el.value) return;
      zoomView(
        el.value,
        e.pageX,
        e.pageY,
        -(props.pointerDownZoomScale ?? 100),
        {
          view: props.view,
          maxScale: props.maxScale,
          minScale: props.minScale,
        },
        (v) => emit("changeView", v),
      );
      return;
    } else {
      createPanDragHandler(
        el.value!,
        props.view,
        (v) => {
          emit("changeView", v);
        },
        (v) => {
          emit("changeCursor", v);
        },
      )(e);
    }
  };
});

const handleWheel = (e: WheelEvent) => {
  handleWheelZoom(
    e,
    props.view,
    (v) => emit("changeView", v),
    (cx, cy, delta) => {
      if (!el.value) return;
      zoomView(
        el.value,
        cx,
        cy,
        delta,
        {
          view: props.view,
          maxScale: props.maxScale,
          minScale: props.minScale,
        },
        (v) => emit("changeView", v),
      );
    },
  );
};

const contentParentStyle = computed(() => ({
  position: "absolute" as const,
  pointerEvents: "none" as const,
  transformOrigin: "0 0",
  top: `${props.view.y}px`,
  left: `${props.view.x}px`,
  transform: `scale(${props.view.scale})`,
}));
</script>

<template>
  <div
    ref="el"
    class="cmpui_canvas-view__root"
    tabIndex="-1"
    :style="{ cursor: cursor }"
    v-bind="$attrs"
    @pointerdown="pointerdown"
    @wheel="handleWheel"
  >
    <div :style="contentParentStyle">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>
