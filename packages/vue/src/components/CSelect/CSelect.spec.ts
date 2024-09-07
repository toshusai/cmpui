import { render, screen } from "@testing-library/vue";
import { test, expect } from "vitest";
import CSelect from "./CSelect.vue";
import { defineComponent, h, nextTick, ref } from "vue";

import "@toshusai/cmpui-css/dist/index.css";

const waitNextTick = () => new Promise<void>((resolve) => nextTick(resolve));

test("select an item", async () => {
  render(
    defineComponent({
      setup() {
        const value = ref("bravo");
        return () =>
          h(CSelect, {
            options: [
              { label: "Alfa", value: "alfa" },
              { label: "Bravo", value: "bravo" },
            ],
            value: value.value,
            onChange: (v: string) => {
              value.value = v;
            },
          });
      },
    }),
  );
  const selectButtonElement = screen.getByText("Bravo");
  const pointerId = 1;
  selectButtonElement?.dispatchEvent(
    new PointerEvent("pointerdown", { bubbles: true, pointerId: pointerId }),
  );
  for (let i = 1; i <= 16; i++) {
    selectButtonElement?.dispatchEvent(
      new PointerEvent("pointermove", {
        bubbles: true,
        movementY: 1,
        clientY: i,
        pointerId,
      }),
    );
  }

  await waitNextTick();
  const targetItemElement = screen.getByText("Alfa");
  targetItemElement?.dispatchEvent(
    new PointerEvent("pointerup", { bubbles: true, pointerId }),
  );
  await waitNextTick();
  expect(selectButtonElement.innerText).toBe("Alfa");
});
