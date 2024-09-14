<script setup lang="ts">
import { useAttrs, useId, VNode } from "vue";
import CCheckboxInput from "./CCheckboxInput.vue";

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
const id = useId();
const finalId = attrs.id ?? id;
const value = defineModel<boolean>();
</script>

<template>
  <div class="cmpui_checkbox__root" :aria-disabled="disabled">
    <CCheckboxInput
      :id="finalId"
      :checked="value"
      :disabled="disabled"
      :size="size"
      v-bind="$attrs"
      @change="(e) => (value = e.target.checked)"
    />
    <label class="cmpui_checkbox__label" :for="finalId">
      <template v-if="typeof label === 'string'">{{ label }}</template>
      <component :is="label" v-else></component>
    </label>
  </div>
</template>
