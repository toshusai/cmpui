<script setup lang="ts">
import { computed, ref } from "vue";
import CColorLoupe from "../CColorLoupe/CColorLoupe.vue";
import CCircle from "../CCircle/CCircle.vue";
import CSVCanvas from "./CSVCanvas.vue";
import {
  createNobPointerDownHandler,
  hsvToRgb,
  rgbToCss,
  useHighContrastColor,
} from "@toshusai/cmpui-core";

const props = defineProps<{
  width: number;
  height: number;
  hue: number;
  saturation: number;
  value: number;
}>();

const emit = defineEmits<{
  (_: "change", s: number, v: number): void;
}>();

const x = computed(() => props.saturation * props.width);
const y = computed(() => (1 - props.value) * props.height);
const fill = computed(() =>
  rgbToCss(
    hsvToRgb({
      h: props.hue,
      s: props.saturation,
      v: props.value,
    }),
  ),
);
const hsv = computed(() => ({
  h: props.hue,
  s: props.saturation,
  v: props.value,
}));
const strokeColor = computed(() => useHighContrastColor(hsv.value));
const nobPd = computed(() =>
  createNobPointerDownHandler({
    height: props.height,
    width: props.width,
    s: props.saturation,
    onChange: (s, v) => emit("change", s, v),
    onDown: () => {
      showLoupe.value = true;
    },
    onUp: () => {
      showLoupe.value = false;
    },
    v: props.value,
  }),
);

const showLoupe = ref(false);
</script>
<template>
  <div className="cmpui_sv-picker__root" tabIndex="0">
    <CSVCanvas
      :width="width"
      :height="height"
      :hue="hue"
      @change="($s, $v) => emit('change', $s, $v)"
      @pointerdown="showLoupe = true"
      @pointerup="showLoupe = false"
    />

    <CColorLoupe v-if="showLoupe" :nob-radius="8" :x="x" :y="y" :color="fill" />
    <CCircle
      class="cmpui_sv-picker__nob"
      :x="x"
      :y="y"
      :stroke-color="strokeColor"
      :stroke-width="2"
      :fill="fill"
      :radius="8"
      @pointerdown="nobPd"
    />
  </div>
</template>
