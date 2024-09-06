<script setup lang="ts">
import { useId } from "../../lib/useId";

withDefaults(
  defineProps<{
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
  }>(),
  {
    checked: false,
    disabled: false,
    label: undefined,
    onChange: undefined,
  },
);

const id = useId();
</script>

<template>
  <div class="cmpui_checkbox__root" :aria-disabled="disabled">
    <input
      :id="id"
      type="checkbox"
      class="cmpui_checkbox__input"
      :disabled="disabled"
      :checked="checked"
      :on-change="checked"
      v-bind="$attrs"
    />
    <label v-if="$slots.default" class="cmpui_checkbox__label" :for="id">
      <slot></slot>
    </label>
  </div>
</template>
