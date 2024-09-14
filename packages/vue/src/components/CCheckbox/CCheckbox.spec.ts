import { render } from "@testing-library/vue";
import { expect, it, describe } from "vitest";
import { h } from "vue";
import CCheckbox from "./CCheckbox.vue";
import prettier from "prettier";
import p from "prettier/plugins/html";

const options: prettier.Options = {
  parser: "html",
  plugins: [p],
  bracketSameLine: false,
  bracketSpacing: false,
  printWidth: 80,
  htmlWhitespaceSensitivity: "ignore",
};

async function expectSameHtml(actual: string, expected: string) {
  expect(await prettier.format(actual, options)).toBe(
    await prettier.format(expected, options),
  );
}

const html = String.raw;
describe("render", () => {
  it("checkbox", async () => {
    const result = render(h(CCheckbox, { label: "Checkbox" })).html();
    await expectSameHtml(
      result,
      html`
        <div class="cmpui_checkbox__root">
          <input type="checkbox" class="cmpui_checkbox__input" id="v:0" />
          <label class="cmpui_checkbox__label" for="v:0">Checkbox</label>
        </div>
      `,
    );
  });

  it("disabled", async () => {
    const result = render(
      h(CCheckbox, { label: "Checkbox", disabled: true }),
    ).html();
    await expectSameHtml(
      result,
      html`
        <div class="cmpui_checkbox__root" aria-disabled="true">
          <input
            type="checkbox"
            class="cmpui_checkbox__input"
            disabled=""
            id="v:0"
          />
          <label class="cmpui_checkbox__label" for="v:0">Checkbox</label>
        </div>
      `,
    );
  });

  it("id", async () => {
    const result = render(
      h(CCheckbox, { label: "Checkbox", id: "my-checkbox" }),
    ).html();
    await expectSameHtml(
      result,
      html`
        <div class="cmpui_checkbox__root">
          <input
            type="checkbox"
            class="cmpui_checkbox__input"
            id="my-checkbox"
          />
          <label class="cmpui_checkbox__label" for="my-checkbox"
            >Checkbox</label
          >
        </div>
      `,
    );
  });
});
