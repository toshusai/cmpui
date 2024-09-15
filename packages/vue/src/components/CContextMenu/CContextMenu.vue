<script setup lang="ts">
import { ref } from "vue";
import CPopover from "../CPopover/CPopover.vue";

defineProps<{
  x?: number;
  y?: number;
  show: boolean;
}>();

const emit = defineEmits<{
  (_e: "close"): void;
}>();

const el = ref<HTMLElement | null>(null);
</script>

<template>
  <div
    ref="el"
    :style="{
      position: 'fixed',
      top: y + 'px',
      left: x + 'px',
    }"
  ></div>
  <CPopover
    :trigger="el"
    auto-resize
    :show="show"
    disabled-tab-close
    @close="emit('close')"
  >
    <slot></slot>
  </CPopover>
</template>
