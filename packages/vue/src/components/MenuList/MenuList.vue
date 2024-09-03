<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useKeyboardNavigation } from "../../lib/menuItem";

const props = withDefaults(
  defineProps<{
    defaultValue?: string;
  }>(),
  {
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
  setTimeout(() => {
    el.value?.focus();
  }, 0);
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
