---
name: typescript
description: Build, review, debug, or refactor TypeScript code and configuration. Use for type modelling, public APIs, generics, narrowing, tsconfig files, module boundaries, declaration files, and type-checking errors.
compatibility: Requires a TypeScript project. Follow the installed TypeScript version and the framework or build-tool configuration.
metadata:
  version: "1.0"
--------------

# TypeScript workflow

## Before coding

1. Inspect `package.json`, the lockfile, and the applicable `tsconfig` chain.
2. Determine the installed version with the repository package manager.
3. Read only the relevant official TypeScript documentation and release notes for that version.
4. Follow framework-provided TypeScript settings where they are more specific.
5. Use stable releases only unless the accepted specification explicitly requires a preview.

## Implementation rules

* Keep strict type-checking enabled and do not weaken existing safety options to silence errors.
* Rely on inference for obvious local values; add explicit types at public APIs, external boundaries, and places where they improve understanding.
* Avoid `any`. Use `unknown` for untrusted values and narrow it before use.
* Validate external data at runtime; TypeScript types do not validate network, CMS, environment, or storage data.
* Prefer discriminated unions for mutually exclusive states and use `never` for exhaustive checks when useful.
* Prefer narrowing and `satisfies` over unsafe type assertions. Use assertions only when the runtime guarantee is known and cannot be expressed more safely.
* Use optional properties deliberately and respect `exactOptionalPropertyTypes` when enabled.
* Handle possibly missing indexed values when `noUncheckedIndexedAccess` is enabled.
* Use `import type` and `export type` for type-only dependencies when required by the module configuration.
* Prefer standard ECMAScript modules. Do not introduce deprecated TypeScript module syntax or obsolete compiler options.
* Use lowercase primitive types such as `string`, `number`, and `boolean`, not boxed types such as `String`, `Number`, or `Boolean`.
* Add generics only when they express a real relationship between values or types; do not add unused or unnecessary type parameters.
* Do not duplicate domain types. Derive types from the source of truth when practical, while keeping external-system types out of presentation components.
* Do not use `@ts-ignore`. For an unavoidable known compiler limitation, use `@ts-expect-error` with a brief reason and the narrowest possible scope.
* Do not manually edit generated declaration or generated type files.

## Configuration rules

* Keep important compiler choices explicit in the shared configuration instead of relying on version-dependent defaults.
* Extend the repository's shared `tsconfig` rather than duplicating configuration across packages.
* Do not replace framework-generated or framework-required options without checking its official documentation.
* Resolve TypeScript 6 deprecations instead of hiding them with `ignoreDeprecations` unless a temporary migration plan explicitly requires it.
* When a `tsconfig.json` exists, use the repository type-check command or `tsc -p`; do not type-check individual files with `tsc file.ts`.
* Use project references only when the repository architecture or measured build performance justifies them.

## Validation

Run the narrowest relevant checks, followed by the repository quality gate when available:

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm check
```

Also run the affected package build when changing exports, declarations, module settings, or shared configuration.
