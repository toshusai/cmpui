<script setup lang="ts">
import { ref } from "vue";
import CRadioGroup, { RadioInputOption } from "../CRadioGroup.vue";

const picked = ref("");
const props = defineProps<{
  options: RadioInputOption[];
  size?: "M" | "L";
}>();
</script>

<template>
  <div>Picked: {{ picked }}</div>
  <CRadioGroup
    v-model="picked"
    name="radio"
    :options="props.options"
    :size="size"
  />
</template>
