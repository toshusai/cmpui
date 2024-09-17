import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "CmpUiCore",
      fileName: (format) => `index.${format}.js`,
    },
    outDir: path.resolve(__dirname, "dist"),
  },
});
