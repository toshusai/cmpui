<script setup lang="ts">
import {
  CSSProperties,
  onMounted,
  onUnmounted,
  ref,
  useId,
  watch,
  watchEffect,
} from "vue";
import { createPopover } from "../../../../core/src/Popover/setPopover";
import { Placement } from "@floating-ui/dom";
import {
  focusTrap as cmpUiFocusTrap,
  defaultPopoverOption,
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
    fitTrigger?: boolean;
    scrollLock?: boolean;
  }>(),
  {
    id: undefined,
    disabledTabClose: defaultPopoverOption.disabledTabClose,
    disabledTriggerClickClose: defaultPopoverOption.disabledTriggerClickClose,
    placement: defaultPopoverOption.placement,
    autoResize: defaultPopoverOption.autoResize,
    flip: defaultPopoverOption.flip,
    show: false,
    trigger: null,
    boundary: undefined,
    fitTrigger: false,
    scrollLock: true,
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

onMounted(() => {
  if (props.fitTrigger && props.trigger && divRef.value) {
    divRef.value.style.width = `${props.trigger.getBoundingClientRect().width}px`;
  }
});

watch(
  () => props.trigger,
  (trigger) => {
    if (props.fitTrigger && trigger && divRef.value) {
      divRef.value.style.width = `${trigger.getBoundingClientRect().width}px`;
    }
  },
);

watch(
  () => [props.trigger, divRef.value, props.show],
  () => {
    if (!props.trigger) return;
    if (!divRef.value) return;
    if (!props.show) return;
    const { cleanUp: cleanUpPopover, open } = createPopover(
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
        offset: defaultPopoverOption.offset,
        padding: defaultPopoverOption.padding,
      },
    );
    const cleanUpLockScroll = props.scrollLock ? lockScroll() : () => {};
    componentCleanUp = () => {
      cleanUpPopover();
      cleanUpLockScroll();
    };

    if (props.focusTrap) {
      const cleanUpFocusTrap = cmpUiFocusTrap(divRef.value);
      componentCleanUp = () => {
        cleanUpFocusTrap();
        cleanUpPopover();
        cleanUpLockScroll();
      };
    }

    open();
  },
);

watchEffect(() => {
  if (!props.show) {
    componentCleanUp();
  }
});

onUnmounted(() => {
  componentCleanUp();
});

const vueId = useId();
</script>

<template>
  <Teleport :to="boundary ?? 'body'">
    <div
      v-if="show"
      :id="id ?? vueId"
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
