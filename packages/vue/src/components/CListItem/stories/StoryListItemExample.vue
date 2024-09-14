<script setup lang="ts">
import CListItem from "../CListItem.vue";
type Item = {
  disabled?: boolean;
  selected?: boolean;
  rounded?: boolean;
  children: string;
  size?: "S" | "M" | "L";
};

defineProps<{
  items: Item[];
}>();
</script>

<template>
  <ul>
    <CListItem v-for="item in items" :key="item.children" v-bind="item">
      {{ item.children }}
    </CListItem>
  </ul>
</template>
