<script setup lang="ts">
import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
} from "@tabler/icons-vue";
import CIconButton from "../../CIconButton/CIconButton.vue";
import CTooltip from "../CTooltip.vue";

const sides = ["top", "right", "bottom", "left"] as const;
const icons = {
  top: IconArrowUp,
  right: IconArrowRight,
  bottom: IconArrowDown,
  left: IconArrowLeft,
};
</script>

<template>
  <div class="grid">
    <div v-for="side in sides" :key="side">
      <CTooltip :placement="side" :content="'Tooltip ' + side">
        <CIconButton bordered>
          <component :is="icons[side]" size="20" />
        </CIconButton>
      </CTooltip>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 150px);
  grid-template-rows: repeat(2, 150px);
}
.grid > div {
  width: 100%;
  height: 100%;
  display: flex;
  border: 1px solid var(--cmpui-border-color);
}
.grid > div > button {
  margin: auto;
}
</style>
