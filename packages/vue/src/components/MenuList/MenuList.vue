<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useKeyboardNavigation } from "../../lib/menuItem";

const props = withDefaults(
  defineProps<{
    is?: string;
    defaultValue?: string;
  }>(),
  {
    is: "ul",
    defaultValue: undefined,
  },
);

const emit = defineEmits<{
  (_e: "select", v: string): void;
}>();

const el = ref<HTMLUListElement | null>(null);

let cleanup = () => {};

onMounted(() => {
  if (!el.value) return;
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
  <component :is="is" ref="el">
    <slot></slot>
  </component>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>
