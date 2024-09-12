<script setup lang="ts">
import { onMounted, watch } from "vue";
import CFloatBox from "../CFloatBox/CFloatBox.vue";

const props = withDefaults(
  defineProps<{
    show: boolean;
    time?: number;
  }>(),
  {
    time: 3000,
  },
);

const emit = defineEmits<{
  (_e: "close"): void;
}>();

let timeout: ReturnType<typeof setTimeout> | null = null;

watch(
  () => props.show,
  (show) => {
    if (show) {
      if (props.time === 0) return;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        emit("close");
      }, props.time);
    }
  },
);

onMounted(() => {
  watch(
    () => props.show,
    (show) => {
      if (!show) {
        if (timeout) clearTimeout(timeout);
      }
    },
  );
});
</script>

<template>
  <Transition name="cmpui_toast_transition">
    <Teleport v-if="show" to="body">
      <CFloatBox class="cmpui_toast__root">
        <slot></slot>
      </CFloatBox>
    </Teleport>
  </Transition>
</template>
