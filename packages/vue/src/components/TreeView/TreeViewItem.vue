<script setup lang="ts" generic="T extends ITree">
import { VNode } from "vue";
import { ITree, RenderProps } from "./types";

const props = defineProps<{
  item: T;
  depth: number;
  render: (props: RenderProps<T>) => VNode;
}>();

const rendered = props.render({
  depth: props.depth,
  item: props.item,
  onOpenChange: () => {},
  open: true,
});
</script>

<template>
  <li>
    <component :is="rendered" />
  </li>
  <li v-if="item.children" className="cmpui_tree-view__item-dir">
    <ol className="cmpui_tree-view__item-dir-ol">
      <TreeViewItem
        v-for="child in item.children"
        :key="child.id"
        :item="child"
        :render="render"
        :depth="depth + 1"
      />
    </ol>
  </li>
</template>
