import js from "@eslint/js";
import typescript from "typescript-eslint"

export default [
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn"
    },
  },
  {
    plugins: { typescript },
  }
];
