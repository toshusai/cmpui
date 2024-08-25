import { expect, test } from "vitest";

import { isEvalSafe } from "./isEvalSafe";

test("sEvalSafe returns true for safe expressions", () => {
  expect(isEvalSafe("1 + 2")).equal(true);
  expect(isEvalSafe("1.1 + 2")).equal(true);
  expect(isEvalSafe("1 - 2")).equal(true);
  expect(isEvalSafe("1 / 2")).equal(true);
  expect(isEvalSafe("1 * 2")).equal(true);
  expect(isEvalSafe("123 * 345 + 123")).equal(true);
  expect(isEvalSafe("(1 + 2) * 3")).equal(true);
  expect(isEvalSafe("mixed + 123")).equal(true);
  expect(isEvalSafe("Math.sin(5) + 123")).equal(true);
  expect(isEvalSafe("Math.floor(5) + 123")).equal(true);
});

test("isEvalSafe returns false for unsafe expressions", () => {
  expect(isEvalSafe("hoge")).equal(false);
  expect(isEvalSafe("1 = 2")).equal(false);
  expect(isEvalSafe("unmixed + 123")).equal(false);
  expect(isEvalSafe("123mixed + 123")).equal(false);
  expect(isEvalSafe("alart(1)")).equal(false);
  expect(isEvalSafe("Math.undefined(5)")).equal(false);
});
