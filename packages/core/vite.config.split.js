import { defineConfig } from "vite";
import path from "path";
import { readdirSync, unlinkSync, writeFileSync } from "fs";

function getCssFileNames() {
  const dir = path.resolve(__dirname, "src/css");
  return readdirSync(dir).filter(
    (file) => file.endsWith(".css") && file !== "index.ts"
  );
}

export default defineConfig({
  plugins: [
    {
      buildStart: () => {
        const dir = path.resolve(__dirname, "src/css");
        getCssFileNames().forEach((cssFileName) => {
          writeFileSync(
            `${dir}/${cssFileName}.ts`,
            `import "./${cssFileName}"`
          );
        });
      },
      closeBundle: () => {
        const dir = path.resolve(__dirname, "src/css");
        getCssFileNames().forEach((cssFileName) => {
          unlinkSync(`${dir}/${cssFileName}.ts`);
        });
      },
    },
  ],
  build: {
    outDir: path.resolve(__dirname, "dist/split"),
    rollupOptions: {
      input: [
        "src/index.ts",
        ...getCssFileNames().map((file) => `src/css/${file}.ts`),
      ],
      output: {
        assetFileNames: "[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
