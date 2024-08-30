import { VNode } from "vue";

export type SelectProps = {
  disabled?: boolean;
  value?: string;
  defaultShow?: boolean;
  label?: string;
  options?: {
    label: string | VNode;
    value: string;
  }[];
};
