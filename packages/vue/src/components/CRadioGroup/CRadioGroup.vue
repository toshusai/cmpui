<script setup lang="ts">
import { VNode } from "vue";
import CRadio from "./CRadio.vue";

const value = defineModel<string>();

export type RadioInputOption = {
  id?: string;
  autofocus?: boolean;
  label: string | VNode;
  disabled?: boolean;
  value: string;
};

withDefaults(
  defineProps<{
    name: string;
    size?: "M" | "L";
    options: RadioInputOption[];
  }>(),
  {
    size: undefined,
  },
);
</script>

<template>
  <div
    role="radiogroup"
    aria-orientation="vertical"
    class="cmpui_radio-group"
    :data-size="size"
    v-bind="$attrs"
  >
    <CRadio
      v-for="(option, i) in options"
      :key="i"
      v-model="value"
      :data-size="size"
      :autofocus="option.autofocus"
      :name="name"
      :disabled="option.disabled"
      :value="option.value"
    >
      <template v-if="typeof option.label === 'string'">
        {{ option.label }}
      </template>
      <component :is="option.label" v-else />
    </CRadio>
  </div>
</template>
