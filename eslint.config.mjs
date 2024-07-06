import withNuxt from "./.nuxt/eslint.config.mjs";
import prettier from "eslint-plugin-prettier";

export default withNuxt({
  plugins: {
    prettier,
  },
  files: ["**/*.ts", "**/*.tsx", "**/*.vue"],
  rules: {
    // JavaScript rules
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prefer-const": "warn",
    "no-var": "warn",
    "no-unused-vars": "off",
    "object-shorthand": "warn",

    // TypeScript rules
    "@typescript-eslint/array-type": [
      "warn",
      {
        default: "array",
      },
    ],
    "@typescript-eslint/consistent-type-assertions": [
      "warn",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "never",
      },
    ],

    // Vue rules
    "vue/no-unused-components": "warn",
    "vue/require-default-prop": "off",

    // Prettier
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        singleQuote: false,
      },
    ],
  },
  ignores: [
    "dist",
    "pnpm-lock.yaml",
    "public",
    "node_modules/",
    "dist/",
    ".nuxt/",
    "*.min.js",
    "*.map",
  ],
});
