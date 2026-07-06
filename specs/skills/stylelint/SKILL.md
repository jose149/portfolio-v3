---
name: stylelint
description: Configure, review, debug, or apply Stylelint rules to CSS, Sass, SCSS, and CSS Modules. Use for Stylelint configuration, shared configs, plugins, custom syntax, ignores, suppressions, autofix, and style lint failures. Use Prettier for formatting and the Sass skill for stylesheet architecture.
compatibility: Requires Stylelint. Follow the locally installed Stylelint, shared config, plugin, Sass, and Node.js versions.
metadata:
  version: "1.0"
---

# Stylelint workflow

## Before changing configuration

1. Inspect `package.json`, the lockfile, `stylelint.config.*`, `.stylelintignore`, editor settings, and existing style scripts.
2. Determine the installed Stylelint, shared config, plugin, custom syntax, and Node.js versions.
3. Read only the relevant official Stylelint documentation and migration guide for those versions.
4. Preserve rule ownership: Stylelint checks stylesheet correctness and enforceable conventions; Prettier formats source code.
5. Do not upgrade Stylelint, shared configs, plugins, or syntax packages unless explicitly requested.

## Rules

- Use an ESM `stylelint.config.mjs` or an equivalent ESM configuration with Stylelint 17+.
- Start from an official or well-maintained standard shared config rather than defining a large ruleset from scratch.
- For SCSS, prefer `stylelint-config-standard-scss`; add `stylelint-scss` directly only when custom SCSS rules beyond the shared config are required.
- Use `overrides` and `customSyntax` only for file types that need non-standard parsing.
- Add CSS Modules support only when the codebase uses CSS Modules-specific syntax that the current config does not understand.
- Add project-specific rules only when they prevent a real error or enforce an agreed, objectively reviewable convention.
- Do not recreate Prettier formatting through Stylelint rules.
- Do not add property ordering unless the team has accepted one stable ordering convention; use a maintained shared ordering config rather than a long hand-written list.
- Prefer modern CSS rules and standard syntax. Configure exceptions only for supported browser requirements, framework syntax, or documented Sass behaviour.
- Keep shared monorepo configuration small. Let packages add only the syntax or conventions they genuinely require.
- Ignore generated CSS, build output, coverage, vendor files, minified files, and dependencies through `.stylelintignore` or narrow globs.
- Quote CLI globs so the command behaves consistently across shells.
- Fix the stylesheet before weakening a rule. When an exception is necessary, disable only the named rule for the smallest possible scope and include a reason.
- Enable reporting for descriptionless, invalid, needless, and unscoped disable comments when compatible with the repository.
- Do not silence deprecation warnings as a permanent solution; update the affected config, plugin, syntax, or rule.
- Review `--fix` changes before committing. Do not assume every autofix is behaviour-neutral.
- Use caching for repeated local or CI runs when it improves performance, and choose content-based caching when file timestamps are unreliable.
- Use `--max-warnings 0` in CI when warnings are part of the enforced policy.
- Add a custom plugin rule only for a recurring repository constraint that existing maintained rules cannot express.

## Validation

Run the narrowest relevant check first, then the repository style and quality gates:

```bash
pnpm exec stylelint "path/to/file.scss"
pnpm exec stylelint "path/to/file.scss" --fix
pnpm stylelint
pnpm check
```

When changing shared configuration, lint representative CSS, SCSS, and CSS Module files from every affected package and inspect the resolved configuration when behaviour is unclear.
