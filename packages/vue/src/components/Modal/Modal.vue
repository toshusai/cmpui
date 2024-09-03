<script setup lang="ts">
import { ref, watch } from "vue";
import { focusTrap } from "../../lib/dialog";
import { ariaHiddenOthers } from "../../lib/dialog/ariaHiddenOthers";
import { lockScroll } from "../../lib/dialog/lockScroll";
import IconButton from "../IconButton/IconButton.vue";
import { useId } from "../../lib/useId";

const el = ref<HTMLElement | null>(null);

const props = defineProps<{
  show: boolean;
  title: string;
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
const id = useId();
</script>

<template>
  <Teleport v-if="show" to="body">
    <div
      ref="el"
      class="cmpui_modal__overlay"
      aria-modal="true"
      :aria-labelledby="id"
      @keydown.esc="emit('close')"
    >
      <div role="dialog" class="cmpui_float-box__root cmpui_modal__root">
        <div class="cmpui_modal__header">
          <div :id="id" class="cmpui_modal__title">{{ title }}</div>
          <IconButton
            class="cmpui_modal__close-button"
            size="S"
            @click="emit('close')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 -960 960 960"
              width="20"
            >
              <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
              />
            </svg>
          </IconButton>
        </div>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<style>
.cmpui_modal__overlay {
  background-color: var(--cmpui-overlay-color);

  animation: overlayShow 100ms;
  inset: 0;
  position: fixed;
  left: 0;
  top: 0;
}

.cmpui_modal__root {
  background-color: var(--cmpui-bg-color);

  left: 50%;
  min-width: 256px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.cmpui_modal__title {
  color: var(--cmpui-text-color);

  font-size: 14px;
  font-weight: bold;
}

.cmpui_modal__header {
  align-items: center;
  display: flex;
  gap: 16px;
  justify-content: center;
  min-height: 24px;
  text-align: center;
}

.cmpui_modal__close-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 4px;
  top: 4px;
}
</style>
