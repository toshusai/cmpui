import * as RadixTooltip from "@radix-ui/react-tooltip";

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <RadixTooltip.Provider>{children}</RadixTooltip.Provider>;
}
