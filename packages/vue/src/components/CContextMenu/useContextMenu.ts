import { reactive } from "vue";

export function useContextMenu() {
  const ctx = reactive({
    x: 0,
    y: 0,
    show: false,
    onClose: () => (ctx.show = false),
  });

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    ctx.x = e.clientX;
    ctx.y = e.clientY;
    ctx.show = true;
  };

  return {
    ctx,
    handleContextMenu,
  };
}
