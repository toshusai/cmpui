import { render, screen } from "@testing-library/vue";
import { test, expect } from "vitest";
import CSelect from "./CSelect.vue";
import { defineComponent, h, nextTick, ref } from "vue";

import "@toshusai/cmpui-css/dist/index.css";

const Test = defineComponent({
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
});

const waitNextTick = () => new Promise<void>((resolve) => nextTick(resolve));

test("select an item", async () => {
  render(Test);
  const el = screen.getByText("Bravo");
  const pointerId = 1;
  el?.dispatchEvent(
    new PointerEvent("pointerdown", { bubbles: true, pointerId: pointerId }),
  );
  for (let i = 1; i <= 16; i++) {
    el?.dispatchEvent(
      new PointerEvent("pointermove", {
        bubbles: true,
        movementY: 1,
        clientY: i,
        pointerId,
      }),
    );
  }

  await waitNextTick();
  const elA = screen.getByText("Alfa");
  elA?.dispatchEvent(
    new PointerEvent("pointerup", { bubbles: true, pointerId }),
  );
  await waitNextTick();
  expect(el.innerText).toBe("Alfa");
});
