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
    <div
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
      "
    >
      <CRadioGroup name="radio" :options="props.options" />
      <CButton type="submit" size="S">Submit</CButton>
    </div>
  </form>
</template>
