"use strict";
import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export default [
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    ignores: ["dist/*", "types/*"],
  },
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
    },
    languageOptions: {
      parserOptions: { parser: tseslint.parser, sourceType: "module" },
    },
  },
  eslintConfigPrettier,
];
