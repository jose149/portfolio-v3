/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard-scss"],

  ignoreFiles: [
    "**/node_modules/**",
    "**/.next/**",
    "**/.turbo/**",
    "**/dist/**",
    "**/build/**",
    "**/out/**",
    "**/coverage/**",
    "**/storybook-static/**",
  ],

  rules: {
    "selector-class-pattern": null,
  },
};
