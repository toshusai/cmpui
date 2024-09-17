<script setup lang="ts">
import {
  createSlider,
  createSliderKeyDown,
  createSliderStyles,
  createSliderTrackPointerDown,
  Direction,
  Orientation,
} from "@toshusai/cmpui-core";
import { computed } from "vue";

defineOptions({});

const props = withDefaults(
  defineProps<{
    modelValue: number;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    orientation?: Orientation;
    direction?: Direction;
  }>(),
  {
    modelValue: 0,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    orientation: Orientation.Horizontal,
    direction: "ltr",
  },
);

const emit = defineEmits<{
  (_: "update:modelValue", value: number): void;
}>();

const onChange = (v: number) => {
  emit("update:modelValue", v);
};

const handleKeyDown = (e: KeyboardEvent) => {
  return createSliderKeyDown(
    e,
    props.modelValue,
    onChange,
    props.step,
    props.min,
    props.max,
    props.orientation,
  );
};

const handleSliderTackPointerDown = (e: PointerEvent) => {
  return createSliderTrackPointerDown(
    onChange,
    props.min,
    props.max,
    props.orientation,
    props.direction,
  )(e);
};

const handlePointeDownNob = (e: PointerEvent) => {
  return createSlider(
    props.modelValue,
    onChange,
    props.min,
    props.max,
    props.orientation,
    props.direction,
  )(e);
};

const styles = computed(() =>
  createSliderStyles(
    props.modelValue,
    props.min,
    props.max,
    props.orientation,
    props.direction,
  ),
);
</script>

<template>
  <div
    class="cmpui_slider__root"
    :data-orientation="orientation"
    :dir="direction"
    :aria-disabled="disabled"
    @pointerdown="handleSliderTackPointerDown"
  >
    <div class="cmpui_slider__track" :data-orientation="orientation">
      <div
        class="cmpui_slider__range"
        :data-orientation="orientation"
        :style="styles.rangeStyle"
      ></div>
    </div>

    <div
      class="cmpui_slider__nob"
      :tabindex="disabled ? -1 : 0"
      :style="styles.nobStyle"
      @keydown="handleKeyDown"
      @pointerdown="handlePointeDownNob"
    ></div>
  </div>
</template>
