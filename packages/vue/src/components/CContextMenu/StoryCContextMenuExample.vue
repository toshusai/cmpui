<script setup lang="ts">
import { ref } from "vue";
import { codeWords } from "../../test/const";
import CMenuList from "../CMenuList/CMenuList.vue";
import CMenuListItem from "../CMenuListItem/CMenuListItem.vue";
import CContextMenu from "./CContextMenu.vue";
import { useContextMenu } from "./useContextMenu";

const { ctx, handleContextMenu } = useContextMenu();
const options = codeWords.map((word) => ({ label: word, value: word }));

const selected = ref<string | null>(null);
</script>
<template>
  <div
    style="
      width: 128px;
      height: 128px;
      border: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: center;
    "
    @contextmenu="handleContextMenu"
  >
    {{ selected }}
  </div>

  <CContextMenu v-bind="ctx">
    <CMenuList
      @select="
        (v) => {
          selected = v;
          ctx.onClose();
        }
      "
    >
      <CMenuListItem
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </CMenuListItem>
    </CMenuList>
  </CContextMenu>
</template>
