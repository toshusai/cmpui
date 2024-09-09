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
  <Transition name="cmpui_modal_transition">
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
            </IconButton>
          </div>
          <slot></slot>
        </div>
      </div>
    </Teleport>
  </Transition>
</template>
