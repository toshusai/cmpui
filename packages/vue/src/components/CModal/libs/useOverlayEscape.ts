import { onMounted, onUnmounted } from "vue";

export function useOverlayEscape(id: string, onClose: () => void) {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      if (document.body.dataset.overlayId === id) {
        onClose();
      }
    }
  };

  let prevOverlayId: string | null = null;
  onMounted(() => {
    prevOverlayId = document.body.dataset.overlayId ?? null;
    document.body.dataset.overlayId = id;
    window.addEventListener("keydown", handleKeyDown);
  });

  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeyDown);
    if (prevOverlayId) {
      document.body.dataset.overlayId = prevOverlayId;
    } else {
      delete document.body.dataset.overlayId;
    }
  });
}
