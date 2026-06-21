---
name: sass
description: Build, review, debug, or refactor Sass and SCSS styles. Use for Sass modules, variables, mixins, functions, design tokens, component styles, global styles, and Sass configuration or deprecation warnings.
compatibility: Requires Dart Sass. Follow the installed Sass version and the framework or build-tool integration.
metadata:
  version: "1.0"
--------------

# Sass workflow

## Before coding

1. Inspect `package.json`, the lockfile, and the framework or bundler configuration.
2. Determine the installed `sass` version.
3. Read only the relevant official Sass documentation and release notes for that version.
4. Follow framework-specific CSS and Sass conventions when they are more specific.
5. Use Dart Sass and stable APIs only.

## Implementation rules

* Prefer native CSS when it solves the problem clearly; use Sass for modules, reusable compile-time logic, and organisation.
* Use `@use` and `@forward`. Do not add Sass `@import`.
* Use namespaced built-in modules such as `sass:math`, `sass:color`, `sass:list`, and `sass:map`; do not use deprecated global built-in functions.
* Use `math.div()` for Sass division. Reserve `/` for CSS separators.
* Use CSS custom properties for runtime values, themes, and values changed by JavaScript. Use Sass variables for compile-time constants.
* Keep component styles locally scoped when the framework supports CSS Modules. Keep global styles limited to resets, foundations, tokens, typography, and shared utilities.
* Keep selectors and nesting shallow. Avoid nesting that hides the final selector or increases specificity unnecessarily.
* Use `&` only when the resulting selector is clear.
* Prefer classes over element ancestry, IDs, and deeply qualified selectors.
* Avoid `!important`; use it only when overriding an external constraint and document the reason.
* Create mixins and functions only for real reuse or non-trivial logic. Do not abstract a single declaration.
* Avoid large generated selector sets, unbounded loops, and compile-time logic that makes the emitted CSS difficult to inspect.
* Expose intentional shared APIs through an entry module with `@forward`; keep internal helpers private.
* Do not use the legacy Sass JavaScript API or deprecated syntax.
* Treat deprecation warnings as migration work rather than silencing them without a documented reason.

## Validation

Run the narrowest relevant checks, followed by the repository quality gate when available:

```bash
pnpm stylelint
pnpm lint
pnpm test
pnpm build
pnpm check
```

Inspect the compiled result when changing shared tokens, mixins, generated styles, or global CSS.
