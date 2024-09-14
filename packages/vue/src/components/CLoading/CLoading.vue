<script setup lang="ts">
defineProps<{
  size?: "S" | "M" | "L";
}>();
</script>
<template>
  <div class="cmpui_loading" :data-size="size" v-bind="$attrs"></div>
</template>
