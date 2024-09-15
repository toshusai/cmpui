<script setup lang="ts">
import { useId } from "vue";
import CRadioInput from "./CRadioInput.vue";

const props = defineProps<{
  id?: string;
  disabled?: boolean;
  size?: "L" | "M";
}>();
const value = defineModel<string>();
const vueId = useId();
const finalId = props.id ?? vueId;
</script>

<template>
  <label
    :for="finalId"
    class="cmpui_radio__input-root"
    :data-size="size"
    :aria-disabled="disabled"
  >
    <CRadioInput
      :id="finalId"
      v-model="value"
      :data-size="size"
      :disabled="disabled"
      v-bind="$attrs"
    />
    <slot></slot>
  </label>
</template>
