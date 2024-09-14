import { render } from "@testing-library/vue";
import { expect, it, describe } from "vitest";
import { defineComponent, h } from "vue";
import CButton from "./CButton.vue";

describe("render", () => {
  it("renders a button", () => {
    const html = render(h(CButton, () => "Button")).html();
    expect(html).toBe(`<button class="cmpui_button">Button</button>`);
  });

  it("disabled", () => {
    const html = render(h(CButton, { disabled: true }, () => "Button")).html();
    expect(html).toBe(
      `<button class="cmpui_button" disabled="">Button</button>`,
    );
  });

  it("bordered", () => {
    const html = render(h(CButton, { bordered: true }, () => "Button")).html();
    expect(html).toBe(
      `<button class="cmpui_button" data-bordered="true">Button</button>`,
    );
  });

  it("variant", () => {
    const html = render(
      h(CButton, { variant: "secondary" }, () => "Button"),
    ).html();
    expect(html).toBe(
      `<button class="cmpui_button" data-variant="secondary">Button</button>`,
    );
  });

  it("size", () => {
    const html = render(h(CButton, { size: "S" }, () => "Button")).html();
    expect(html).toBe(
      `<button class="cmpui_button" data-size="S">Button</button>`,
    );
  });

  it("link", () => {
    const html = render(
      h(CButton, { is: "a", href: "#" }, () => "Button"),
    ).html();
    expect(html).toBe(`<a class="cmpui_button" href="#">Button</a>`);
  });

  const CustomComponent = defineComponent((_, { slots }) => {
    return () => h("div", h("span", slots.default?.()));
  });

  it("custom", () => {
    const html = render(
      h(CButton, { is: h(CustomComponent) }, () => "Button"),
    ).html();
    expect(html).toBe(`<div class="cmpui_button"><span>Button</span></div>`);
  });
});
