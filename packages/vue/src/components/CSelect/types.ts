import { VNode } from "vue";

export type SelectProps = {
  disabled?: boolean;
  label?: string;
  options?: {
    label: string | VNode;
    value: string;
  }[];
};
