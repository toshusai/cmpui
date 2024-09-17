<script setup lang="ts">
import {
  ComponentPublicInstance,
  computed,
  CSSProperties,
  onMounted,
  onUnmounted,
  ref,
  useId,
  useSlots,
  watch,
  watchEffect,
} from "vue";
import { createTooltip } from "../../../../core/src/Tooltip/createTooltip";
import { isValidVNode } from "./lib";
import { Side } from "@floating-ui/dom";

const props = withDefaults(
  defineProps<{
    content: string;
    forceShow?: boolean;
    delay?: number;
    side?: Side;
    group?: string;
    groupDelay?: number;
  }>(),
  {
    forceShow: false,
    delay: 300,
    side: "top",
    group: "cmpuiTooltip",
    groupDelay: 200,
  },
);

const style = ref<CSSProperties>({
  display: "none",
  position: "fixed",
  top: "0",
  left: "0",
});

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

const setData = (value?: string) => {
  if (value === undefined) {
    delete document.body.dataset[props.group];
    return;
  }
  document.body.dataset[props.group] = value;
};
const getData = () => {
  return document.body.dataset[props.group];
};

const slotElement = computed(() => {
  let el = slotRef.value;
  if (!el) return;
  if (!(el instanceof HTMLElement || el instanceof SVGElement)) {
    el = el.$el;
    if (!(el instanceof HTMLElement) && !(el instanceof SVGElement)) return;
  }
  return el;
});

let i: ReturnType<typeof setTimeout> | undefined;
const handleMouseEnter = () => {
  if (getData()) {
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
    if (show) {
      setData(id);
    } else {
      setTimeout(() => {
        if (getData() === id) {
          setData(undefined);
        }
      }, props.groupDelay);
    }
  },
);

let componentCleanUp = () => {};

watch(
  () => [
    slotRef.value,
    tooltipRef.value,
    arrowRef.value,
    show.value,
    props.forceShow,
  ],
  () => {
    if (!slotRef.value) return;
    if (!tooltipRef.value) return;
    if (!slotElement.value) return;
    if (!arrowRef.value) return;
    const { cleanUp, open } = createTooltip(
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
        } else if (pos.placement === "left") {
          arrowRef.value.style.transform = "rotate(-90deg)";
          arrowRef.value.style.transformOrigin = "right";
          arrowRef.value.style.top = "";
        } else if (pos.placement === "right") {
          arrowRef.value.style.transform = "rotate(90deg)";
          arrowRef.value.style.transformOrigin = "left";
          arrowRef.value.style.top = "";
          arrowRef.value.style.left = "-2px";
        }
      },
      {
        placement: props.side,
      },
    );

    if (props.forceShow || show.value) {
      open();
      componentCleanUp = cleanUp;
    }
  },
);

watch(
  () => props.forceShow,
  (forceShow) => {
    show.value = forceShow;
  },
);

watchEffect(() => {
  if (!show.value) {
    componentCleanUp();
  }
});

onUnmounted(() => {
  componentCleanUp();
});

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
  <Teleport to="body">
    <div
      v-if="show || forceShow"
      :id="id"
      ref="tooltipRef"
      class="cmpui_tooltip__root"
      role="tooltip"
      v-bind="$attrs"
      :style="style"
    >
      {{ content }}
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
  </Teleport>
</template>
