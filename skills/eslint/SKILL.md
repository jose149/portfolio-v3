---
name: eslint
description: Configure, review, debug, or apply ESLint rules in JavaScript, TypeScript, React, Next.js, tests, and monorepo packages. Use for flat config, plugins, ignores, typed linting, suppressions, and lint failures.
compatibility: Requires ESLint. Follow the installed ESLint, plugin, framework, and TypeScript versions.
metadata:
  version: "1.0"
--------------

# ESLint workflow

## Before changing configuration

1. Inspect `package.json`, the lockfile, `eslint.config.*`, package-level configs, and existing lint scripts.
2. Determine the installed ESLint and plugin versions.
3. Read only the relevant official ESLint, framework-plugin, and typescript-eslint documentation.
4. Preserve the repository's rule ownership: ESLint checks code quality; Prettier formats code.
5. Do not upgrade ESLint, plugins, or shared configs unless explicitly requested.

## Rules

* Use flat config in `eslint.config.*`. Do not add legacy `.eslintrc*` files.
* Start from official recommended configs, then add only project-specific rules with a clear purpose.
* Scope configuration by file patterns so browser, server, test, configuration, and generated files receive appropriate rules.
* Ignore build output, generated files, coverage, dependencies, and other files not owned by the project.
* Keep shared monorepo configuration small. Let applications and packages add only their required framework or environment rules.
* For TypeScript, prefer typescript-eslint configs. Enable typed linting only where its additional checks justify the cost, and prefer Project Service when supported.
* Disable overlapping core rules when the TypeScript-aware equivalent is enabled.
* Do not add stylistic rules that conflict with Prettier; keep `eslint-config-prettier` after configs that may enable them.
* Prefer errors for correctness and safety. Avoid large sets of subjective warning-only rules.
* Fix the code before weakening a rule. When an exception is necessary, use the narrowest inline suppression with a brief reason.
* Do not use broad file-wide disables, blanket rule shutdowns, or `eslint-disable` without justification.
* Do not rely on `--fix` for changes that may alter behaviour without review.
* Add a custom rule only for a recurring, enforceable repository constraint that existing rules cannot express.
* Keep lint output deterministic and fail CI on unexpected lint errors.

## Validation

Run the narrowest relevant command first, then the repository quality gate:

```bash
pnpm exec eslint path/to/changed-file.ts
pnpm lint
pnpm check
```

When changing shared configuration, lint representative files from every affected application and package.
