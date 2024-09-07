<script setup lang="ts">
import { provide, ref } from "vue";
import { TOAST_PROVIDER_KEY } from "./lib";

const props = withDefaults(
  defineProps<{
    interval?: number;
  }>(),
  {
    interval: 500,
  },
);

const show = ref(false);

let i: ReturnType<typeof setTimeout> | null = null;

const setShow = (v: boolean) => {
  if (v) {
    show.value = v;
    if (i !== null) clearTimeout(i);
  } else {
    i = setTimeout(() => {
      show.value = v;
    }, props.interval);
  }
};

provide(TOAST_PROVIDER_KEY, {
  show: show,
  setShow: setShow,
});
</script>

<template>
  <slot />
</template>
