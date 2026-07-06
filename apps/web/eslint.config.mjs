import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),

  // Must remain after the other rule configurations.
  eslintConfigPrettier,
]);
