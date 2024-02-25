import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  entryPoints: ["src/index.ts"],
  format: "esm",
  target: "esnext",
  dts: true,
});
