<script lang="ts" setup>
import { useId } from "../../lib/useId";

withDefaults(
  defineProps<{
    label?: string;
    invalid?: boolean;
    disabled?: boolean;
  }>(),
  {
    label: undefined,
    invalid: false,
    disabled: false,
  },
);

const value = defineModel<string>();

const id = useId();
</script>

<template>
  <div
    class="cmpui_text-input__root"
    :aria-disabled="disabled"
    :aria-invalid="invalid"
  >
    <label class="cmpui_text-input__label" :for="id">
      {{ label }}
    </label>
    <slot name="prefix" />
    <input
      :id="id"
      v-bind="$attrs"
      v-model="value"
      :aria-invalid="invalid"
      class="cmpui_text-input__input"
      type="text"
    />
    <slot name="suffix" />
  </div>
</template>
