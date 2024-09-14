<script setup lang="ts">
import { computed, ref } from "vue";
import CAutoComplete from "../CAutoComplete.vue";
import CChip from "../../CChip/CChip.vue";
import { codeWords } from "../../../test/const";

const options = computed(() =>
  codeWords.map((word) => ({ label: word, value: word })),
);

const value = ref<string>("");
const tags = ref<string[]>([]);
</script>

<template>
  <div style="width: 256px">
    <CAutoComplete
      v-model="value"
      :options="options"
      :root-attrs="{
        style: {
          width: '256px',
          padding: '8px',
          gap: '4px',
          flexWrap: 'wrap',
          minHeight: '42px',
        },
      }"
      style="width: auto"
      placeholder="Type a name"
      @select="
        (v) => {
          tags.push(v);
          value = '';
        }
      "
    >
      <template #prefix>
        <CChip v-for="tag in tags" :key="tag">
          {{ tag }}
        </CChip>
      </template>
    </CAutoComplete>
  </div>
</template>
