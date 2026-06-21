---

name: vitest
description: Write, review, configure, or debug unit tests with Vitest. Use for pure logic, utilities, data transformations, services, mocks, fake timers, coverage, test projects, and Vitest configuration. Use React Testing Library for React component behaviour and Playwright for end-to-end journeys.
compatibility: Requires Vitest. Follow the locally installed Vitest, Vite, framework, and Node.js versions.
metadata:
  version: "1.0"
--------------

# Vitest workflow

## Before testing

1. Inspect `package.json`, the lockfile, `vitest.config.*`, setup files, nearby tests, and the code under test.
2. Determine the installed Vitest, Vite, and Node.js versions.
3. Read only the relevant official Vitest documentation for those versions; prefer the Markdown documentation pages when available.
4. Follow existing test locations, naming, environments, and helpers.
5. Do not upgrade Vitest or change repository-wide test configuration unless explicitly requested.

## Rules

* Test observable behaviour through inputs, outputs, state changes, and documented errors; do not test private implementation details.
* Prefer unit tests for pure functions, utilities, validation, mapping, and non-trivial domain logic.
* Keep each test focused on one behaviour and give it a descriptive name.
* Structure tests clearly as arrange, act, and assert without adding comments when the phases are already obvious.
* Cover meaningful success, boundary, empty, and failure cases; avoid exhaustive tests with no practical value.
* Keep tests deterministic. Do not depend on real time, randomness, network access, process order, or shared mutable state.
* Use the `node` environment for logic that does not require a browser. Use a DOM environment only when the tested behaviour genuinely requires DOM APIs.
* Use explicit imports from `vitest` unless the repository intentionally enables globals.
* Prefer real collaborators for fast, deterministic code. Mock only external boundaries, slow dependencies, nondeterministic behaviour, or failures that are otherwise difficult to produce.
* Prefer dependency injection or small adapters over deep module mocking when the production design supports it.
* Use `vi.spyOn` when preserving most of an object's real behaviour; use `vi.mock` only when replacing a module boundary is necessary.
* Restore mocks, globals, environment variables, fake timers, and system time after each affected test.
* Await asynchronous work and assertions. Do not use arbitrary delays to make tests pass.
* Use fake timers only for timer-driven behaviour, and restore real timers after the test.
* Use `test.each` for the same behaviour across several representative inputs.
* Use snapshots only for small, stable, reviewable outputs. Prefer explicit assertions for business rules and important behaviour.
* Treat coverage as a diagnostic signal, not the goal. Add thresholds only when they reflect meaningful repository policy; do not write low-value tests solely to reach 100%.
* Use the V8 coverage provider by default unless the repository has a documented reason to use Istanbul.
* Use `projects` for genuinely different environments or configurations; do not use the deprecated workspace configuration.
* Preserve test isolation and parallelism by default. Change them only after measuring a real performance problem and confirming tests clean up all state.
* Keep Vitest tests separate from Playwright end-to-end tests.
* Do not rely on Vitest execution as TypeScript validation; run the repository type-check command separately.

## Validation

Run the narrowest relevant test first, then the complete unit-test and quality checks:

```bash
pnpm exec vitest run path/to/file.test.ts
pnpm test
pnpm test -- --coverage
pnpm typecheck
pnpm check
```

Use watch mode locally with `pnpm exec vitest`; use `vitest run` in CI.
