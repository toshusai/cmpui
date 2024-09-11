<script setup lang="ts">
import { ref } from "vue";
import CCheckbox from "../CCheckbox.vue";

const checked = ref(true);
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
    <div>Checked: {{ checked }}</div>
    <CCheckbox v-model:checked="checked" label="Checkbox"></CCheckbox>
  </div>
</template>
