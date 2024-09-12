<script setup lang="ts">
import { useId } from "vue";
defineProps<{
  disabled?: boolean;
  options: {
    value: string;
    label: string;
  }[];
  label?: string;
}>();

const value = defineModel<string>();

const id = useId();
</script>

<template>
  <div
    class="cmpui_select__root cmpui_select-native__root"
    :aria-disabled="disabled"
  >
    <select :id="id" v-model="value" :disabled="disabled" v-bind="$attrs">
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <label v-if="label" className="cmpui_select__label" :for="id">
      {{ label }}
    </label>
  </div>
</template>
