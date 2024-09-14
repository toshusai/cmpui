<script lang="ts" setup>
import { IconChevronRight } from "@tabler/icons-vue";
</script>

<template>
  <div style="display: flex; gap: 8px; align-items: center">
    <span>
      <slot></slot>
    </span>
    <IconChevronRight :size="16" />
  </div>
</template>
