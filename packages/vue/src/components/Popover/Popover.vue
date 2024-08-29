<script setup lang="ts">
import { CSSProperties, ref, watch } from "vue";
import { setPopover } from "../../lib/popover";

const divRef = ref<HTMLElement | null>(null);

const props = defineProps<{
  trigger: HTMLElement | null;
  show: boolean;
  disabledTriggerClickClose?: boolean;
}>();

const emit = defineEmits<{
  (_e: "close"): void;
}>();

const style = ref<CSSProperties>({
  display: "none",
  position: "fixed",
  top: "0",
  left: "0",
});

watch(
  () => [props.trigger, divRef.value, props.show],
  () => {
    if (!props.trigger) return;
    if (!divRef.value) return;
    const { cleanUp, open } = setPopover(
      divRef.value,
      props.trigger,
      () => {
        emit("close");
      },
      (pos) => {
        if (pos.left !== undefined && pos.top !== undefined) {
          style.value.transform = `translate(${pos.left}px, ${pos.top}px)`;
        }
        if (pos.maxWidth !== undefined) {
          style.value.maxWidth = `${pos.maxWidth}px`;
        }
        if (pos.maxHeight !== undefined) {
          style.value.maxHeight = `${pos.maxHeight}px`;
        }
        style.value.display = "";
      },
      {
        disabledTriggerClickClose: props.disabledTriggerClickClose,
      },
    );

    const handleOpenChange = (show: boolean) => {
      if (show) {
        open();
      } else {
        cleanUp();
        style.value.display = "none";
      }
    };

    handleOpenChange(props.show);

    watch(() => props.show, handleOpenChange);
  },
);
</script>

<template>
  <div
    ref="divRef"
    class="cmpui_float-box__root"
    tabindex="-1"
    v-bind="$attrs"
    :style="style"
  >
    <slot></slot>
  </div>
</template>
