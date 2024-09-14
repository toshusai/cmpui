<script setup lang="ts">
import { inject, nextTick, ref, useId, watch } from "vue";
import CIconButton from "../CIconButton/CIconButton.vue";

const props = defineProps<{
  show: boolean;
  title: string;
}>();

const emit = defineEmits<{
  (_e: "close", dialog: HTMLDialogElement): void;
}>();

const dialogRef = ref<HTMLDialogElement | null>(null);

watch(
  () => props.show,
  (show) => {
    if (show) {
      nextTick(() => {
        dialogRef.value?.showModal();
      });
    } else {
      dialogRef.value?.close();
    }
  },
);
const id = useId();
const modalOptions = inject("modalOptions", {
  modalCloseButtonAriaLabel: "Close",
});
</script>
<template>
  <Teleport to="body">
    <Transition name="cmpui_modal_transition">
      <dialog
        v-if="show"
        ref="dialogRef"
        class="cmpui_float-box__root cmpui_modal__root cmpui_modal__native"
        @close="emit('close', dialogRef!)"
      >
        <div class="cmpui_modal__header">
          <div :id="id" class="cmpui_modal__title">{{ title }}</div>
          <CIconButton
            class="cmpui_modal__close-button"
            :aria-label="modalOptions.modalCloseButtonAriaLabel"
            size="S"
            @click="emit('close', dialogRef!)"
          >
          </CIconButton>
        </div>
        <form method="dialog">
          <slot></slot>
        </form>
      </dialog>
    </Transition>
  </Teleport>
</template>
