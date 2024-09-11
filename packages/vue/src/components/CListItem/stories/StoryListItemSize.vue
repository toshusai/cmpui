<script setup lang="ts">
import CListItem from "../CListItem.vue";
withDefaults(
  defineProps<{
    size?: "S" | "M" | "L";
  }>(),
  {
    size: "M",
  },
);
</script>

<template>
  <CListItem :size="size">Neil Armstrong</CListItem>
  <CListItem :size="size">Alan Bean</CListItem>
  <CListItem :size="size">Peter Conrad</CListItem>
  <CListItem :size="size">Edgar Mitchell</CListItem>
  <CListItem :size="size">Alan Shepard</CListItem>
</template>
