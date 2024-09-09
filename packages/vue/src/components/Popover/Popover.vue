<script setup lang="ts">
import { CSSProperties, onMounted, onUnmounted, ref, watch } from "vue";
import { setPopover } from "../../../../core/src/popover/setPopover";
import { useId } from "../../lib/useId";
import { Placement } from "@floating-ui/dom";
import { lockScroll } from "@toshusai/cmpui-core";

const divRef = ref<HTMLElement | null>(null);

const props = defineProps<{
  disabledTriggerClickClose?: boolean;
  id?: string;
  placement?: Placement;
  show: boolean;
  trigger: HTMLElement | null;
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

let componentCleanUp = () => {};

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
        placement: props.placement,
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

    componentCleanUp = cleanUp;
  },
);

let cleanUp = () => {};
onMounted(() => {
  if (props.show) {
    const cleanUpLockScroll = lockScroll();
    cleanUp = () => {
      cleanUpLockScroll();
    };
  } else {
    cleanUp();
  }
});

onUnmounted(() => {
  componentCleanUp();
  cleanUp();
});

const id = useId(props.id);
</script>

<template>
  <Teleport to="body">
    <div
      :id="id"
      ref="divRef"
      class="cmpui_float-box__root"
      tabindex="-1"
      v-bind="$attrs"
      :style="style"
    >
      <slot></slot>
    </div>
  </Teleport>
</template>
