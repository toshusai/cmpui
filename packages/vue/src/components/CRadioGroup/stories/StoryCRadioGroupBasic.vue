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
  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
    "
  >
    <div>Picked: {{ picked }}</div>
    <CRadioGroup
      v-model="picked"
      name="radio"
      :options="props.options"
      :size="size"
    />
  </div>
</template>
