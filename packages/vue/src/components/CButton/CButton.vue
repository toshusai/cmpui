<script setup lang="ts">
import {
  CButtonProps,
  CButtonSize,
  CButtonVariant,
} from "@toshusai/cmpui-core";
import { VNode } from "vue";

withDefaults(
  defineProps<
    CButtonProps & {
      is?: string | VNode;
    }
  >(),
  {
    is: "button",
    bordered: false,
    disabled: false,
    size: CButtonSize.M,
    variant: CButtonVariant.primary,
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
