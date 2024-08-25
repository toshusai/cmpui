import { expect, test } from "vitest";

import { inputEval } from "./inputEval";

test("inputEval correctly evaluates mathematical expression", () => {
  expect(inputEval("1 + 2")).toEqual(3);
  expect(inputEval("1.2 + 2")).toEqual(1.2 + 2);
  expect(inputEval("(1 + 2) * 3")).toEqual((1 + 2) * 3);
  expect(inputEval("mixed + 3", 3)).toEqual(3 + 3);
  expect(inputEval("Math.sin(2)")).toEqual(Math.sin(2));
  expect(inputEval("Math.PI")).toEqual(Math.PI);

  expect(inputEval("Math.PI2")).toEqual(Number.NaN);
  expect(inputEval("123mixed + 123", 3)).toEqual(Number.NaN);
});
