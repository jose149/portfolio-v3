---
name: pnpm-workspaces
description: Design, configure, or modify a pnpm workspace or monorepo. Use for pnpm-workspace.yaml, workspace package boundaries, internal dependencies, workspace protocol, catalogs, filtered commands, shared lockfiles, and dependency cycles. Use the pnpm skill for ordinary package installation and script execution.
compatibility: Requires a pnpm workspace. Follow the repository-pinned pnpm version.
metadata:
  version: "1.0"
---

---

# pnpm workspaces workflow

## Before changing the workspace

1. Inspect `pnpm-workspace.yaml`, the root and affected `package.json` files, `pnpm-lock.yaml`, `.npmrc`, and existing shared packages.
2. Determine the repository-pinned pnpm version and current package graph.
3. Read only the relevant official pnpm workspace, filtering, and catalog documentation for that version.
4. Preserve existing package boundaries unless the accepted design requires a structural change.
5. Use the Turborepo skill for task pipelines, caching, and affected-task orchestration.

## Rules

- Define workspace package locations explicitly in the root `pnpm-workspace.yaml`.
- Give every workspace package a unique, stable `name`. Mark packages as `private` unless they are intentionally published.
- Declare each dependency in the package that imports it. Do not rely on dependencies installed only at the workspace root.
- Use the `workspace:` protocol for internal package dependencies so installation fails rather than silently resolving a registry package.
- Add a dependency to a specific package with `pnpm --filter <package> add <dependency>`. Use `-w` only for genuine root-level tooling.
- Run targeted commands with `pnpm --filter`; avoid executing every package when only one package or dependency subgraph is affected.
- Use exact package names or reviewed filter expressions. Enable or use `failIfNoMatch` where a mistyped filter must fail rather than succeed silently.
- Keep the shared workspace lockfile unless the repository has a documented reason not to.
- Avoid cyclic workspace dependencies. Fix cycles rather than hiding warnings; enable `disallowWorkspaceCycles` when compatible with the repository.
- Keep package responsibilities narrow. Do not create a shared package until at least two consumers need a stable shared boundary.
- A shared UI or configuration package must not depend on an application package.
- Export only the public API of a package. Do not make consumers import private source paths.
- Use catalogs for external dependency versions repeated across several packages. Do not introduce catalogs for isolated dependencies or hide intentional version differences.
- Keep product runtime dependencies in the consuming application or package; keep repository-wide development tooling at the root when appropriate.
- Do not move, rename, split, merge, publish, or version packages without an accepted architectural change.
- Review all affected manifests and lockfile entries after changing workspace dependencies.

## Validation

Run targeted checks first, then the repository quality gate:

```bash
pnpm list -r --depth -1
pnpm --filter <affected-package> typecheck
pnpm --filter <affected-package> lint
pnpm --filter <affected-package> test
pnpm install --frozen-lockfile
pnpm check
```

After changing package boundaries, verify that consumers build through declared package exports and that the workspace contains no new dependency cycles.
