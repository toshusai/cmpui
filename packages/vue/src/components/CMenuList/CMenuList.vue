<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useKeyboardNavigation } from "../../../../core/src/menuItem";

const props = withDefaults(
  defineProps<{
    defaultValue?: string;
    autoFocus?: boolean;
  }>(),
  {
    autoFocus: true,
    defaultValue: undefined,
  },
);

const emit = defineEmits<{
  (_e: "select", v: string): void;
}>();

const el = ref<HTMLDivElement | null>(null);

let cleanup = () => {};

onMounted(() => {
  if (!el.value) return;
  if (props.autoFocus) {
    setTimeout(() => {
      el.value?.focus({ preventScroll: true });
    }, 0);
  }
  cleanup = useKeyboardNavigation(
    el.value,
    (value) => {
      emit("select", value);
    },
    {
      defaultValue: props.defaultValue,
    },
  );
});

onUnmounted(() => {
  cleanup();
});
</script>

<template>
  <div ref="el" class="cmpui_menu-list" role="listbox" tabindex="-1">
    <slot></slot>
  </div>
</template>
