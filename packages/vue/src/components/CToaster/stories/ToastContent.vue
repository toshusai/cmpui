<script setup lang="ts">
import { IconX } from "@tabler/icons-vue";
import CIconButton from "../../CIconButton/CIconButton.vue";

defineProps<{
  text: string;
}>();

const emit = defineEmits<{
  (_e: "close"): void;
}>();
</script>

<template>
  <div style="display: flex; gap: 8px; align-items: center">
    <div>{{ text }}</div>
    <CIconButton size="S" @click="emit('close')">
      <IconX size="16" />
    </CIconButton>
  </div>
</template>
