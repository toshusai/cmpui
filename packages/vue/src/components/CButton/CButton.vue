<script setup lang="ts">
import { type CButtonSize, type CButtonVariant } from "@toshusai/cmpui-core";
import { VNode } from "vue";

withDefaults(
  defineProps<{
    is?: string | VNode;
    bordered?: boolean;
    disabled?: boolean;
    size?: CButtonSize;
    variant?: CButtonVariant;
  }>(),
  {
    is: "button",
    bordered: undefined,
    disabled: undefined,
    size: undefined,
    variant: undefined,
  },
);
</script>

<template>
  <component
    :is="is"
    class="cmpui_button"
    :data-bordered="bordered"
    :data-size="size"
    :data-variant="variant"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot></slot>
  </component>
</template>
