<script setup lang="ts">
import {
  ComponentPublicInstance,
  computed,
  CSSProperties,
  inject,
  onMounted,
  ref,
  useSlots,
  watch,
} from "vue";
import { tooltip } from "../../lib/tooltip";
import { useId } from "../../lib/useId";
import { isValidVNode, TOAST_PROVIDER_KEY, TooltipProvide } from "./lib";

const props = withDefaults(
  defineProps<{
    text: string;
    forceShow?: boolean;
    delay?: number;
  }>(),
  {
    forceShow: false,
    delay: 300,
  },
);

const style = ref<CSSProperties>({
  display: "none",
  position: "fixed",
  top: "0",
  left: "0",
});

const provider = inject<TooltipProvide | undefined>(
  TOAST_PROVIDER_KEY,
  undefined,
);

const slots = useSlots();

onMounted(() => {
  const children = slots.default?.().filter(isValidVNode) ?? [];
  if (children.length === 0) return;
  if (children.length > 1) {
    console.error("Tooltip can only have one child");
    return;
  }
});

const slotRef = ref<HTMLElement | ComponentPublicInstance | null>(null);
const tooltipRef = ref<HTMLElement | null>(null);
const arrowRef = ref<HTMLElement | null>(null);

const show = ref(false);

const slotElement = computed(() => {
  let el = slotRef.value;
  if (!el) return;
  if (!(el instanceof HTMLElement)) {
    el = el.$el;
    if (!(el instanceof HTMLElement)) return;
  }
  return el;
});

let i: ReturnType<typeof setTimeout> | undefined;
const handleMouseEnter = () => {
  if (provider?.show.value === true) {
    show.value = true;
    return;
  }
  i = setTimeout(() => {
    show.value = true;
  }, props.delay);
};

const handleMouseLeave = () => {
  clearTimeout(i);
  show.value = false;
};

watch(
  () => show.value,
  (show) => {
    if (provider) {
      provider.setShow(show);
    }
  },
);

watch(
  () => [slotRef.value, tooltipRef.value, arrowRef.value],
  () => {
    if (!slotRef.value) return;
    if (!tooltipRef.value) return;
    if (!slotElement.value) return;
    if (!arrowRef.value) return;
    const { cleanUp, open } = tooltip(
      tooltipRef.value,
      slotElement.value,
      arrowRef.value,
      () => {
        show.value = false;
      },
      (pos) => {
        show.value = true;

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

        if (!arrowRef.value) return;

        arrowRef.value.style.left =
          pos.arrow?.x != null ? `${pos.arrow.x}px` : "";
        arrowRef.value.style.top =
          pos.arrow?.y != null ? `${-pos.arrow.y}px` : "";

        if (pos.placement === "bottom") {
          arrowRef.value.style.transform = "rotate(180deg)";
          arrowRef.value.style.transformOrigin = "top";
          arrowRef.value.style.top = "0";
          arrowRef.value.style.bottom = "";
        } else if (pos.placement === "top") {
          arrowRef.value.style.transform = "rotate(0deg)";
          arrowRef.value.style.transformOrigin = "bottom";
          arrowRef.value.style.top = "";
          arrowRef.value.style.bottom = "-5px";
        }
      },
    );

    let stop = () => {};
    const handleOpenChange = (show: boolean) => {
      if (show) {
        open();
      } else {
        cleanUp();
        style.value.display = "none";
      }
      stop();
    };

    handleOpenChange(show.value || props.forceShow);
    stop = watch(
      () => [show.value, props.forceShow],
      ([show, forceShow]) => handleOpenChange(show || forceShow),
    );
  },
);

watch(
  () => props.forceShow,
  (forceShow) => {
    show.value = forceShow;
  },
);

const id = useId();
</script>

<template>
  <component
    :is="slots.default?.()[0]"
    ref="slotRef"
    :aria-describedby="show || forceShow ? id : undefined"
    @pointerenter="handleMouseEnter"
    @pointerleave="handleMouseLeave"
  />
  <div
    v-if="show || forceShow"
    :id="id"
    ref="tooltipRef"
    class="cmpui_tooltip__root"
    role="tooltip"
    v-bind="$attrs"
    :style="style"
  >
    {{ text }}
    <svg
      ref="arrowRef"
      class="cmpui_tooltip__arrow"
      style="position: absolute"
      width="10"
      height="5"
      viewBox="0 0 30 10"
      preserveAspectRatio="none"
    >
      <polygon points="0,0 30,0 15,10" />
    </svg>
  </div>
</template>
