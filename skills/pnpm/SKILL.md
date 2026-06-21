---

name: pnpm
description: Install, remove, update, execute, or troubleshoot dependencies and scripts with pnpm. Use for package.json changes, lockfile changes, dependency overrides, lifecycle-script approvals, pnpm configuration, and CI installs. Do not use this skill for workspace architecture; use the pnpm-workspaces skill instead.
compatibility: Requires pnpm. Follow the repository-pinned pnpm version and supported Node.js version.
metadata:
  version: "1.0"
--------------

# pnpm workflow

## Before changing dependencies

1. Inspect `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, `.npmrc`, and the relevant scripts.
2. Determine the pinned pnpm version from `packageManager` or `devEngines.packageManager`.
3. Use the repository-pinned pnpm version through Corepack or the existing toolchain.
4. Read only the relevant official pnpm documentation for that version.
5. Do not upgrade pnpm, Node.js, or dependencies unless explicitly requested.

## Rules

* Use pnpm exclusively when the repository contains `pnpm-lock.yaml`; do not generate another package-manager lockfile.
* Commit `pnpm-lock.yaml` whenever dependency resolution changes.
* Use `pnpm install --frozen-lockfile` in CI. Do not repair lockfile drift during CI.
* Add dependencies with `pnpm add`; use `-D` for development-only tooling and place runtime packages in `dependencies`.
* Remove packages with `pnpm remove`. Do not edit only `package.json` and leave stale lockfile entries.
* Run project scripts with `pnpm <script>` or `pnpm run <script>`.
* Run locally installed binaries with `pnpm exec`.
* Use `pnpm dlx` only for temporary, one-off tools that must not become project dependencies.
* Prefer exact, reviewable dependency changes. Do not run broad updates or change unrelated packages.
* Use `pnpm outdated` before planned upgrades and review release notes for major-version changes.
* Use `pnpm why <package>` before removing, replacing, or overriding a transitive dependency.
* Use `overrides` only for an intentional repository-wide resolution constraint and document why it exists.
* Never commit registry credentials or authentication tokens. Keep sensitive registry configuration outside repository-controlled files.
* Treat dependency lifecycle scripts as untrusted. Approve required build scripts explicitly and review the package first.
* Do not delete the lockfile or store as a routine troubleshooting step. Diagnose the error before resetting installation state.
* Review every unexpected lockfile change before completion.

## Validation

Run the narrowest relevant commands, followed by the repository quality gate:

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm check
```

After a dependency change, verify that installation succeeds from the committed lockfile and that only intended manifest and lockfile entries changed.
