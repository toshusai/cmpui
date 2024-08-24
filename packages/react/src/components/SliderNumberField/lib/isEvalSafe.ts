const mathProps = Object.getOwnPropertyNames(Math);

export function isEvalSafe(str: string) {
  return new RegExp(
    `^(\\b(mixed|${mathProps
      .map((prop) => `Math.${prop}`)
      .join("|")})\\b|[\\(\\)0-9. \\-+/*])+$`,
  ).test(str);
}
