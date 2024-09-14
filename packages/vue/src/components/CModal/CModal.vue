<script setup lang="ts">
import { inject, ref, watchEffect } from "vue";
import IconButton from "../CIconButton/CIconButton.vue";
import { useDialog } from "./libs/useDialog";

const elRef = ref<HTMLElement | null>(null);

const props = defineProps<{
  show: boolean;
  title: string;
}>();

const emit = defineEmits<{
  (_e: "close"): void;
}>();

const { id, cleanUp } = useDialog(elRef, () => emit("close"));

watchEffect(() => {
  if (!props.show) {
    cleanUp();
  }
});

const modalOptions = inject("modalOptions", {
  modalCloseButtonAriaLabel: "Close",
});
</script>

<template>
  <Teleport to="body">
    <Transition name="cmpui_modal_transition">
      <div
        v-if="show"
        ref="elRef"
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
              :aria-label="modalOptions.modalCloseButtonAriaLabel"
              size="S"
              @click="emit('close')"
            >
            </IconButton>
          </div>
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
