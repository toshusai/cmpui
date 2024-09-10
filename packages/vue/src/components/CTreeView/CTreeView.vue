<script setup lang="ts" generic="T extends ITree">
import { ITree, RenderProps } from "./types";

import { VNode } from "vue";
import CTreeViewItem from "./CTreeViewItem.vue";

const props = defineProps<{
  items: T[];
  render: (props: RenderProps<T>) => VNode;
}>();
</script>

<template>
  <div className="cmpui_tree-view__root">
    <ol className="cmpui_tree-view__ol">
      <CTreeViewItem
        v-for="item in props.items"
        :key="item.id"
        :item="item"
        :depth="0"
        :render="render"
      >
      </CTreeViewItem>
    </ol>
  </div>
</template>
