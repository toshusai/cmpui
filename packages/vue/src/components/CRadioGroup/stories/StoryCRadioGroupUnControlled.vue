<script setup lang="ts">
import CRadioGroup, { RadioInputOption } from "../CRadioGroup.vue";
import CButton from "../../CButton/CButton.vue";

const props = defineProps<{
  options: RadioInputOption[];
}>();

const handleSubmit = (e: Event) => {
  e.preventDefault();
  var formData = new FormData(e.target as HTMLFormElement);
  const selected = formData.get("radio");
  alert(`Selected: ${selected}`);
};
</script>

<template>
  <form @submit="handleSubmit">
    <CRadioGroup name="radio" :options="props.options" />
    <CButton type="submit" size="S" style="margin-top: 16px;">Submit</CButton>
  </form>
</template>
