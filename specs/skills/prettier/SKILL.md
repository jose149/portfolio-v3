---
name: prettier
description: Configure, review, or apply Prettier formatting. Use for Prettier configuration, ignore rules, plugins, editor integration, formatting scripts, and format-check failures.
compatibility: Requires Prettier. Follow the locally installed Prettier and plugin versions.
metadata:
  version: "1.0"
---

---

# Prettier workflow

## Before changing configuration

1. Inspect `package.json`, the lockfile, Prettier configuration, `.prettierignore`, editor settings, and formatting scripts.
2. Determine the locally installed Prettier and plugin versions.
3. Read only the relevant official Prettier documentation for those versions.
4. Preserve rule ownership: Prettier formats code; ESLint and Stylelint check code quality.
5. Do not upgrade Prettier or add plugins unless explicitly required.

## Rules

- Use the project-local Prettier installation and pin its exact version in the lockfile.
- Keep one repository-level configuration unless a package has a genuine incompatible requirement.
- Keep configuration minimal. Prefer Prettier defaults and avoid options based only on personal preference.
- Use `.prettierignore` for generated files, build output, coverage, dependencies, lockfiles not owned by the project, and other files that must not be rewritten.
- Use `prettier-ignore` only for a small construct that Prettier cannot format correctly; include a brief reason when it is not obvious.
- Use overrides only when a file type genuinely requires different parsing or formatting.
- Install plugins only for languages not supported by Prettier core or for an accepted project requirement.
- Declare plugins explicitly when required by the installed Prettier version and package manager.
- Do not combine Prettier with ESLint formatting rules. Keep `eslint-config-prettier` after configurations that may enable conflicting rules.
- Do not run repository-wide formatting as part of an unrelated change.
- Do not manually adjust formatting that Prettier will immediately rewrite.
- Do not format generated, vendored, minified, or external files.
- Use `--check` in CI and `--write` only for intentional local formatting.
- Keep editor format-on-save behaviour consistent with the repository-local configuration.

## Validation

Run the narrowest relevant command first, then the repository format check:

```bash
pnpm exec prettier --check path/to/changed-file
pnpm format:check
pnpm check
```

After changing configuration or plugins, check representative files for every supported language and package.
