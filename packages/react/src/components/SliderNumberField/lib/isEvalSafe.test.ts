import { expect, test } from "vitest";
import { isEvalSafe } from "./isEvalSafe";

test("sEvalSafe returns true for safe expressions", () => {
  expect(isEvalSafe("1 + 2")).true;
  expect(isEvalSafe("1.1 + 2")).true;
  expect(isEvalSafe("1 - 2")).true;
  expect(isEvalSafe("1 / 2")).true;
  expect(isEvalSafe("1 * 2")).true;
  expect(isEvalSafe("123 * 345 + 123")).true;
  expect(isEvalSafe("(1 + 2) * 3")).true;
  expect(isEvalSafe("mixed + 123")).true;
  expect(isEvalSafe("Math.sin(5) + 123")).true;
  expect(isEvalSafe("Math.floor(5) + 123")).true;
});

test("isEvalSafe returns false for unsafe expressions", () => {
  expect(isEvalSafe("hoge")).false;
  expect(isEvalSafe("1 = 2")).false;
  expect(isEvalSafe("unmixed + 123")).false;
  expect(isEvalSafe("123mixed + 123")).false;
  expect(isEvalSafe("alart(1)")).false;
  expect(isEvalSafe("Math.undefined(5)")).false;
});
