<script setup lang="ts">
withDefaults(
  defineProps<{
    checked?: boolean;
    disabled?: boolean;
    size?: "S" | "M" | "L";
  }>(),
  {
    checked: false,
    disabled: false,
    size: "M",
  },
);

const emit = defineEmits<{
  (_e: "change", v: boolean, e: Event): void;
}>();
</script>

<template>
  <input
    type="checkbox"
    class="cmpui_checkbox__input"
    :disabled="disabled"
    :checked="checked"
    v-bind="$attrs"
    :data-size="size"
    @change="(e) => emit('change', (e.target as HTMLInputElement).checked, e)"
  />
</template>
