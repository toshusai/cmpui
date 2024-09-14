<script setup lang="ts">
import { onMounted, watch } from "vue";
import CFloatBox from "../CFloatBox/CFloatBox.vue";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    show: boolean;
    time?: number;
    horizontal?: "left" | "center" | "right";
    vertical?: "top" | "center" | "bottom";
  }>(),
  {
    time: 3000,
    horizontal: "right",
    vertical: "bottom",
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
  if (props.show) {
    if (props.time === 0) return;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      emit("close");
    }, props.time);
  }
});

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
    <CFloatBox
      v-if="show"
      class="cmpui_toast__root"
      :data-horizontal="horizontal"
      :data-vertical="vertical"
      v-bind="$attrs"
    >
      <slot></slot>
    </CFloatBox>
  </Transition>
</template>
