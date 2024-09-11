<script lang="ts" setup>
import { useId } from "../../lib/useId";

withDefaults(
  defineProps<{
    label?: string;
    invalid?: boolean;
    disabled?: boolean;
    type?: string;
    placeholder?: string;
  }>(),
  {
    label: undefined,
    invalid: false,
    disabled: false,
    type: "text",
    placeholder: undefined,
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
      v-model="value"
      :aria-invalid="invalid"
      :disabled="disabled"
      :placeholder="placeholder"
      :type="type"
      class="cmpui_text-input__input"
    />
    <slot name="suffix" />
  </div>
</template>
