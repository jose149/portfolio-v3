---

name: turborepo
description: Configure, review, debug, or optimise Turborepo task orchestration and caching. Use for turbo.json, task dependencies, inputs, outputs, environment variables, filtering, affected tasks, Remote Cache, CI, and turbo prune. Use the pnpm-workspaces skill for package boundaries and workspace dependencies.
compatibility: Requires Turborepo. Follow the repository-pinned turbo version.
metadata:
  version: "1.0"
--------------

# Turborepo workflow

## Before changing configuration

1. Inspect `package.json`, the lockfile, `turbo.json` or `turbo.jsonc`, workspace packages, and relevant package scripts.
2. Determine the locally installed `turbo` version.
3. Use `turbo docs` when supported; otherwise read only the relevant official documentation for the installed version.
4. Inspect the task graph with a dry run before changing dependencies or caching.
5. Do not upgrade Turborepo, enable preview features, or configure Remote Cache without explicit approval.

## Rules

* Keep `turbo` installed at the workspace root and pinned through the lockfile.
* Define reusable task behaviour in the root `turbo.json`; use package configurations only for genuine exceptions.
* Every Turborepo task must correspond to a script in the package that runs it.
* Use `dependsOn: ["^build"]` when a task needs dependency packages built first. Use task dependencies without `^` only for tasks in the same package.
* Declare every generated file needed after a cache hit in `outputs`. Do not declare source files as outputs.
* Keep default task inputs unless narrowing them has a measured benefit. When customising inputs, preserve defaults with `$TURBO_DEFAULT$`.
* Put root files that affect many tasks in `globalDependencies`, but keep this list small to avoid repository-wide cache misses.
* Declare environment variables that affect task results in `env` or `globalEnv`. Do not place output-affecting variables only in passthrough configuration.
* Include relevant `.env` files in task inputs. Never cache or commit secrets.
* Configure long-running development tasks with `cache: false` and `persistent: true`.
* Do not cache tasks when restoring their outputs costs more than rerunning them.
* Use `turbo run <task>` in package scripts and CI to avoid collisions with Turborepo subcommands.
* Use `--filter` for a known package or dependency graph and `--affected` for source-control-based change detection.
* Use `turbo query affected` only when CI needs to skip preparation work before task execution.
* Use `turbo prune <package> --docker` only for isolated deployment or Docker contexts.
* Diagnose cache misses with `--dry` and `--summarize` before disabling or forcing the cache.
* Prefer local caching first. Add Remote Cache only when sharing results across machines or CI provides clear value.
* Keep Remote Cache credentials outside the repository and use the least privilege available.
* Do not duplicate workspace dependency management, package scripts, or framework-level caching inside Turborepo configuration.
* Do not enable canary releases or `futureFlags` unless an accepted change explicitly requires them.

## Validation

Run a dry inspection first, then the affected tasks and repository quality gate:

```bash
pnpm exec turbo run build --dry
pnpm exec turbo run lint typecheck test --affected
pnpm exec turbo run build
pnpm check
```

After changing caching configuration, run the relevant task twice and confirm the second run restores every expected output from cache.
