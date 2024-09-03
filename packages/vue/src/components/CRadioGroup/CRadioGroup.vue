<script setup lang="ts">
import CRadioInputWithLabel from "./CRadioInputWithLabel.vue";

const value = defineModel<string>();

defineProps<{
  name: string;
  size?: "M" | "L";
  options: {
    id?: string;
    autofocus?: boolean;
    label: string;
    value: string;
  }[];
}>();
</script>

<template>
  <div
    role="radiogroup"
    aria-orientation="vertical"
    class="cmpui_radio-group"
    :data-size="size"
    v-bind="$attrs"
  >
    <CRadioInputWithLabel
      v-for="option in options"
      :key="option.label"
      v-model="value"
      :data-size="size"
      :autofocus="option.autofocus"
      :name="name"
      :value="option.value"
    >
      {{ option.label }}
    </CRadioInputWithLabel>
  </div>
</template>
