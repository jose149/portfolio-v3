# Executor handoff

Task: `foundation-01-workspace-web-bootstrap`

Execution mode: `checkpointed`

## Read

1. `AGENTS.md`
2. `specs/agents/executor.md`
3. `specs/features/000-foundation/000-foundation.md`
4. `specs/tasks/foundation-01-workspace-web-bootstrap/spec.md`
5. `specs/tasks/foundation-01-workspace-web-bootstrap/tasks.md`
6. Skills listed in `spec.md`
7. Affected repository files and manifests

## Goal

Create the initial pnpm and Turborepo workspace with a minimal buildable Next.js App Router web application scaffolded from `create-next-app`, Sass styling, and reusable strict TypeScript configuration.

## Do

- Implement only the accepted task in `spec.md`.
- Execute checkpoints in `tasks.md` in order.
- Use `create-next-app` or an equivalent command path for `apps/web` with TypeScript, ESLint, App Router, Turbopack, pnpm, import alias `@/*`, no Tailwind, and Sass.
- Run checkpoint verification and record evidence in `result.md`.
- Keep changes inside the repository boundaries defined by `spec.md`.

## Do Not

- Add Sanity Studio, Storybook, shared UI components, analytics, consent, deployment, CI, or testing infrastructure.
- Add complete repository-wide ESLint, Prettier, or Stylelint configuration.
- Implement final portfolio sections.
- Add unrelated dependencies or package boundaries.
- Claim unexecuted checks passed.

## Verification

Use the commands and expected results in `tasks.md`.

## Report

Return:

- checkpoint completed;
- files changed;
- verification results;
- deviations or blockers;
- remaining checkpoints.
