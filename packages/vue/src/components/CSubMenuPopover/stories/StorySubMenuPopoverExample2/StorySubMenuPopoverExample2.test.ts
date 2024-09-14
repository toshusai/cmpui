import { cleanup, render, screen } from "@testing-library/vue";
import { test, expect, beforeEach } from "vitest";
import SubMenuPopoverExample from "./StorySubMenuPopoverExample2.vue";
import { userEvent } from "@vitest/browser/context";
import "@toshusai/cmpui-css/dist/index.css";
import { asyncNextTick } from "../../../../test/asyncNextTick";
import { asyncSetTimeout } from "../../../../test/asyncSetTimeout";

beforeEach(cleanup);

test("select a nested submenu item by click", async () => {
  render(SubMenuPopoverExample);
  const selectButtonElement = screen.getByTestId("trigger");
  selectButtonElement.click();

  await asyncNextTick();
  const targetItemElement = screen.getByText("SubMenu2");
  await userEvent.click(targetItemElement);
  await asyncSetTimeout(200);
  const targetItemElement2 = screen.getByTestId("submenu3");
  await userEvent.click(targetItemElement2);
  await asyncSetTimeout(200);

  const el = screen.getByText("Golf");
  await userEvent.click(el);
  expect(selectButtonElement.innerText).toBe("Golf");
});

test("open a nested submenu by keyboard", async () => {
  render(SubMenuPopoverExample);
  const selectButtonElement = screen.getByTestId("trigger");
  selectButtonElement.click();

  await asyncNextTick();
  await userEvent.keyboard("{arrowdown}");
  await userEvent.keyboard("{arrowdown}");
  await userEvent.keyboard("{enter}");
  await asyncNextTick();
  await asyncSetTimeout(300);
  expect(screen.getByText("Beta")).not.toBeNull();
});

test("select a nested submenu item by keyboard", async () => {
  render(SubMenuPopoverExample);
  //   1. Click the trigger button
  const selectButtonElement = screen.getByTestId("trigger");
  selectButtonElement.click();
  await asyncNextTick();

  // 2. Open the submenu1 with keyboard
  await userEvent.keyboard("{arrowup}");
  await asyncSetTimeout(300);
  expect(screen.getByText("Delta")).not.toBeNull();

  // 3. Open the submenu2 with keyboard
  await userEvent.keyboard("{arrowright}");
  await userEvent.keyboard("{arrowdown}");
  await userEvent.keyboard("{arrowdown}");
  await userEvent.keyboard("{arrowdown}");
  await asyncSetTimeout(300);
  expect(screen.getByText("Golf")).not.toBeNull();

  // Select the item
  await userEvent.keyboard("{arrowright}");
  await userEvent.keyboard("{arrowdown}");
  await userEvent.keyboard("{arrowdown}");
  await userEvent.keyboard("{enter}");
  expect(selectButtonElement.innerText).toBe("Golf");
});
