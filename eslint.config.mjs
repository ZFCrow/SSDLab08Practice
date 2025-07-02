import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import security from "eslint-plugin-security";
import noUnsanitized from "eslint-plugin-no-unsanitized";
import pluginSecurityNode from "eslint-plugin-security-node";


export default defineConfig([
  // ESLint's recommended rules
  js.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      security,
      "no-unsanitized": noUnsanitized, // ✅ match the rule prefix,
      "security-node": pluginSecurityNode,
    },
    rules: {
      ...security.configs.recommended.rules,
      ...noUnsanitized.configs.recommended.rules,
      ...pluginSecurityNode.configs.recommended.rules, // ✅ Add this line
    },
  },
]);
