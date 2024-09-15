<script setup lang="ts">
import { useAttrs, useId, VNode } from "vue";
import CCheckboxInput from "./CSwitchInput.vue";

defineOptions({
  inheritAttrs: false,
});

withDefaults(
  defineProps<{
    label: string | VNode;
    disabled?: boolean;
    size?: "S" | "M" | "L";
  }>(),
  {
    disabled: undefined,
    size: undefined,
  },
);

const attrs = useAttrs() as { id?: string };
const vueId = useId();
const id = attrs.id ?? vueId;
const value = defineModel<boolean>();
</script>

<template>
  <div class="cmpui_switch__root" :aria-disabled="disabled">
    <CCheckboxInput
      :id="id"
      :checked="value"
      :disabled="disabled"
      :size="size"
      v-bind="$attrs"
      @change="(e) => (value = e.target.checked)"
    />
    <label class="cmpui_switch__label" :for="id">
      <template v-if="typeof label === 'string'">{{ label }}</template>
      <component :is="label" v-else></component>
    </label>
  </div>
</template>
