<script setup lang="ts">
import { ref, watch } from "vue";
import { focusTrap } from "../../lib/dialog";
import { ariaHiddenOthers } from "../../lib/dialog/ariaHiddenOthers";
import { lockScroll } from "../../lib/dialog/lockScroll";

const el = ref<HTMLElement | null>(null);

const props = defineProps<{
  show: boolean;
}>();

const emit = defineEmits<{
  (_e: "close"): void;
}>();

let cleanUp = () => {};

watch(
  () => el.value,
  (el) => {
    if (el) {
      const cleanUpFocusTrap = focusTrap(el);
      const cleanUpLockScroll = lockScroll();
      const cleanUpAriaHiddenOthers = ariaHiddenOthers(el);
      cleanUp = () => {
        cleanUpFocusTrap();
        cleanUpLockScroll();
        cleanUpAriaHiddenOthers();
      };
    }
  },
);

watch(
  () => props.show,
  (show) => {
    if (!show) cleanUp();
  },
);
</script>

<template>
  <Teleport v-if="show" to="body">
    <div
      ref="el"
      class="cmpui_drawer__overlay"
      @keydown.esc="emit('close')"
      @click="emit('close')"
    >
      <div class="cmpui_drawer" @click.stop>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>
