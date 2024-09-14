<script lang="ts" setup>
import { useAttrs, useId } from "vue";

defineOptions({
  inheritAttrs: false,
});

withDefaults(
  defineProps<{
    disabled?: boolean;
    invalid?: boolean;
    label?: string;
    rootAttrs?: Record<string, unknown>;
  }>(),
  {
    disabled: false,
    invalid: false,
    label: undefined,
    rootAttrs: undefined,
  },
);

const value = defineModel<string>();

const id = useId();
const finalId = (useAttrs() as { id?: string }).id ?? id;
</script>

<template>
  <div
    class="cmpui_text-input__root"
    :aria-disabled="disabled"
    :aria-invalid="invalid"
    v-bind="rootAttrs"
  >
    <label class="cmpui_text-input__label" :for="finalId">
      {{ label }}
    </label>
    <slot name="prefix" />
    <input
      :id="finalId"
      v-model="value"
      class="cmpui_text-input__input"
      :aria-invalid="invalid"
      :disabled="disabled"
      v-bind="$attrs"
    />
    <slot name="suffix" />
  </div>
</template>
