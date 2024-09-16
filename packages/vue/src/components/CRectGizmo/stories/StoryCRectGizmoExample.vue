<script setup lang="ts">
import { reactive } from "vue";
import CRectGizmo from "../CRectGizmo.vue";

const transform = reactive({
  scale: { x: 1, y: 1 },
  rotation: 0,
  position: { x: 100, y: 100 },
  origin: { x: 10, y: 50 },
  width: 100,
  height: 100,
});
</script>

<template>
  <CRectGizmo
    :width="transform.width"
    :height="transform.height"
    :scale="transform.scale"
    :rotation="transform.rotation"
    :position="transform.position"
    :origin="transform.origin"
    @change="
      (v) => {
        transform.scale = v.scale;
        transform.rotation = v.rotation;
        transform.position = v.position;
        transform.origin = v.origin;
      }
    "
  >
    <div
      class="alpha-checker-board"
      style="pointer-events: none; width: 100%; height: 100%"
    />
  </CRectGizmo>
</template>
