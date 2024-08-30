<script setup lang="ts">
import Select from "../Select.vue";
import { ref } from "vue";
import { SelectProps } from "../types";

defineProps<SelectProps>();

const names = [
  "Alfa",
  "Bravo",
  "Charlie",
  "Delta",
  "Echo",
  "Foxtrot",
  "Golf",
  "Hotel",
  "India",
  "Juliett",
  "Kilo",
  "Lima",
  "Mike",
  "November",
  "Oscar",
  "Papa",
  "Quebec",
  "Romeo",
  "Sierra",
  "Tango",
  "Uniform",
  "Victor",
  "Whiskey",
  "X-ray",
  "Yankee",
  "Zulu",
];

const value = ref<string>(names[8]);
</script>

<template>
  <Select
    :value="value"
    :options="names.map((name) => ({ label: name, value: name }))"
    :default-show="defaultShow"
    :label="label"
    v-bind="$attrs"
    @change="(v) => (value = v)"
  >
  </Select>
</template>
