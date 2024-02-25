import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  tsconfig: "tsconfig.build.json",
  entryPoints: ["src/index.ts"],
  format: "esm",
  target: "esnext",
  dts: true,
});
