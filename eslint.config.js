import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  { files: ["**/*.{ts,tsx}"] },
  { ignores: ["src/panda/**", "dist/**"] },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-console": "error",
      "react/react-in-jsx-scope": "off",
    },
  },
];
