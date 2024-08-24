export function isValidHex(hex: string) {
  return (
    /^#[0-9A-F]{3}$/i.test(hex) ||
    /^#[0-9A-F]{4}$/i.test(hex) ||
    /^#[0-9A-F]{6}$/i.test(hex) ||
    /^#[0-9A-F]{8}$/i.test(hex)
  );
}
