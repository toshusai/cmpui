<script setup lang="ts">
import { useId } from "../../lib/useId";
import CRadioInput from "./CRadioInput.vue";

const props = defineProps<{ id?: string; size?: "L" | "M" }>();
const value = defineModel<string>();
const finalId = useId(props.id);
</script>

<template>
  <label :for="finalId" class="cmpui_radio__input-root" :data-size="size">
    <CRadioInput
      :id="finalId"
      v-model="value"
      :data-size="size"
      v-bind="$attrs"
      @change="console.log"
    />
    <slot></slot>
  </label>
</template>
