<script setup lang="ts">
import { h, ref } from "vue";
import CRadioGroup from "../CRadioGroup.vue";
import { IconBuildingBank, IconCash, IconCreditCard } from "@tabler/icons-vue";
const picked = ref("");

const spanStyle = {
  display: "flex",
  alignItems: "center",
  gap: "4px",
};

const options = [
  {
    label: h("span", { style: spanStyle }, [h(IconCash, { size: 16 }), "Cash"]),
    value: "cash",
  },
  {
    label: h("span", { style: spanStyle }, [
      h(IconBuildingBank, { size: 16 }),
      "Bank",
    ]),
    value: "bank",
  },
  {
    label: h("span", { style: spanStyle }, [
      h(IconCreditCard, { size: 16 }),
      "Credit card",
    ]),
    value: "credit",
  },
];
</script>

<template>
  <div>Picked: {{ picked }}</div>
  <CRadioGroup v-model="picked" name="radio" :options="options" />
</template>
