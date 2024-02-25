import { isEvalSafe } from "./isEvalSafe";

export function inputEval(str: string, mixed?: number): number {
  try {
    if (!isEvalSafe(str)) {
      return Number.NaN;
    }
    if (mixed) {
      return new Function("mixed", `return ${str}`)(mixed);
    }

    const result = new Function(`return ${str}`)();
    if (typeof result === "number") {
      return result;
    }
    return Number.NaN;
  } catch {
    return Number.NaN;
  }
}
