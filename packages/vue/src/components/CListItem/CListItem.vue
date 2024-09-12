<script setup lang="ts">
withDefaults(
  defineProps<{
    is?: string;
    rounded?: boolean;
    selected?: boolean;
    disabled?: boolean;
    disabledInteraction?: boolean;
    size?: "S" | "M" | "L";
  }>(),
  {
    is: "li",
    disabled: undefined,
    disabledInteraction: undefined,
    rounded: undefined,
    selected: undefined,
    size: "M",
  },
);
</script>

<template>
  <component
    :is="is"
    class="cmpui_list-item__root"
    :data-size="size"
    :data-rounded="rounded"
    :aria-disabled="disabled"
    :aria-selected="selected"
    :data-no-interaction="disabledInteraction"
    v-bind="$attrs"
  >
    <slot></slot>
  </component>
</template>
