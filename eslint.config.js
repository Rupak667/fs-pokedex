// eslint.config.js
import globals from "globals";
import js from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",  // Use "module" for ALL files
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.jest,
      },
    },
  },
];