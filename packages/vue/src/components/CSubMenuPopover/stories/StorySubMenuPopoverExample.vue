<script lang="ts" setup>
import { ref } from "vue";
import CMenuListItem from "../../CMenuListItem/CMenuListItem.vue";
import CButton from "../../CButton/CButton.vue";
import CPopover from "../../CPopover/CPopover.vue";
import CMenuList from "../../CMenuList/CMenuList.vue";
import { useSubMenuPopover } from "../useSubMenuPopover";
import CSubMenuPopover from "../CSubMenuPopover.vue";
import { IconChevronRight } from "@tabler/icons-vue";

const trigger = ref<InstanceType<typeof CMenuListItem> | null>(null);
const show = ref(false);
const selected = ref<string | null>(null);

const handleSelect = (v: string) => {
  selected.value = v;
  show.value = false;
};

const popover1 = useSubMenuPopover();
</script>

<template>
  <CButton ref="trigger" data-testid="trigger" @click="show = true">
    {{ selected ?? "Select" }}
  </CButton>

  <CPopover :trigger="trigger?.$el" :show="show" @close="show = false">
    <CMenuList>
      <CMenuListItem
        is="button"
        @focus="popover1.close()"
        @click="handleSelect('Alpha')"
      >
        Alpha
      </CMenuListItem>

      <!-- SubMenu1 -->
      <CMenuListItem
        :ref="popover1.triggerBind"
        @focus="popover1.pointerEnter()"
        @blur="popover1.pointerLeave()"
      >
        <div style="display: flex; gap: 8px; align-items: center">
          <span> SubMenu1 </span>
          <IconChevronRight :size="16" />
        </div>
      </CMenuListItem>

      <CSubMenuPopover
        :show="popover1.show.value"
        :trigger="popover1.trigger.value"
        @close="popover1.close"
      >
        <CMenuListItem is="button" @click="handleSelect('Beta')">
          Beta
        </CMenuListItem>
        <CMenuListItem is="button" @click="handleSelect('Charlie')">
          Charlie
        </CMenuListItem>
      </CSubMenuPopover>
    </CMenuList>
  </CPopover>
</template>
