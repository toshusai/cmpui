<script setup lang="ts">
import { useId } from "../../lib/useId";
import CCheckboxInput from "./CCheckboxInput.vue";

const props = withDefaults(
  defineProps<{
    inputId?: string;
    checked?: boolean;
    disabled?: boolean;
    size?: "S" | "M" | "L";
  }>(),
  {
    inputId: undefined,
    checked: false,
    disabled: false,
    size: "M",
  },
);

const emit = defineEmits<{
  (_e: "change", v: boolean, e: Event): void;
}>();

const id = useId(props.inputId);
</script>

<template>
  <div class="cmpui_checkbox__root" :aria-disabled="disabled">
    <CCheckboxInput
      :id="id"
      :disabled="disabled"
      :checked="checked"
      :size="size"
      v-bind="$attrs"
      @change="(v, e) => emit('change', v, e)"
    />
    <label v-if="$slots.default" class="cmpui_checkbox__label" :for="id">
      <slot></slot>
    </label>
  </div>
</template>
