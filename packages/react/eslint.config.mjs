"use strict";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import eslintPluginImport from "eslint-plugin-import";

export default [
  ...tseslint.configs.recommended,
  {
    ignores: ["dist/*", "node_modules/*", "storybook-static/*"],
  },
  {
    plugins: { import: eslintPluginImport },
    rules: {
      "vue/multi-word-component-names": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "import/order": [
        "error",
        {
          "newlines-between": "always",
        },
      ],
    },
    languageOptions: {
      parserOptions: { parser: tseslint.parser, sourceType: "module" },
    },
  },
  eslintConfigPrettier,
];
