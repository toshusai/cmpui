import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "happy-dom",
    include: ["**/*.{test,spec}.ts"],
    exclude: ["./node_modules", "**/*.browser.test.ts"],
  },
});
