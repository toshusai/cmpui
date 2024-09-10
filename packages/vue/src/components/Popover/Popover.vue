<script setup lang="ts">
import { CSSProperties, onMounted, onUnmounted, ref, watch } from "vue";
import { setPopover } from "../../../../core/src/popover/setPopover";
import { useId } from "../../lib/useId";
import { Placement } from "@floating-ui/dom";
import {
  focusTrap as cmpUiFocusTrap,
  defaultOptions,
  lockScroll,
} from "@toshusai/cmpui-core";

const divRef = ref<HTMLElement | null>(null);

const props = withDefaults(
  defineProps<{
    disabledTriggerClickClose?: boolean;
    disabledTabClose?: boolean;
    focusTrap?: boolean;
    id?: string;
    placement?: Placement;
    show: boolean;
    flip?: boolean;
    trigger: HTMLElement | null;
    boundary?: HTMLElement;
    autoResize?: boolean;
  }>(),
  {
    id: undefined,
    disabledTabClose: defaultOptions.disabledTabClose,
    disabledTriggerClickClose: defaultOptions.disabledTriggerClickClose,
    placement: defaultOptions.placement,
    autoResize: defaultOptions.autoResize,
    flip: defaultOptions.flip,
    show: false,
    trigger: null,
    boundary: undefined,
  },
);

const emit = defineEmits<{
  (_e: "close"): void;
}>();

const style = ref<CSSProperties>({
  display: "none",
  position: "fixed",
  top: "0",
  left: "0",
});

const dataPlacement = ref<Placement | undefined>(undefined);

let componentCleanUp = () => {};

watch(
  () => [props.trigger, divRef.value, props.show],
  () => {
    if (!props.trigger) return;
    if (!divRef.value) return;
    const { cleanUp: cleanUpPopover, open } = setPopover(
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
        dataPlacement.value = pos.placement;
      },
      {
        disabledTriggerClickClose: props.disabledTriggerClickClose,
        placement: props.placement,
        disabledTabClose: props.disabledTabClose,
        flip: props.flip,
        autoResize: props.autoResize,
        boundary: props.boundary,
        offset: defaultOptions.offset,
        padding: defaultOptions.padding,
      },
    );
    componentCleanUp = cleanUpPopover;

    if (props.focusTrap) {
      const cleanUpFocusTrap = cmpUiFocusTrap(divRef.value);
      componentCleanUp = () => {
        cleanUpFocusTrap();
        cleanUpPopover();
      };
    }

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
  <Teleport :to="boundary ?? 'body'">
    <div
      :id="id"
      ref="divRef"
      class="cmpui_float-box__root"
      tabindex="-1"
      v-bind="$attrs"
      :data-placement="dataPlacement"
      :style="style"
    >
      <slot></slot>
    </div>
  </Teleport>
</template>
