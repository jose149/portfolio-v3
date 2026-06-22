Plan task `foundation-01-workspace-web-bootstrap`.

Read:

1. `AGENTS.md`
2. `specs/agents/planner.md`
3. `specs/features/000-foundation.md`
4. `specs/skills/INDEX.md`
5. the current repository root and relevant existing manifests

Do not implement source code.

Create the draft task under:

`specs/tasks/_draft/foundation-01-workspace-web-bootstrap/`

The task goal is to create the initial pnpm and Turborepo workspace with a minimal buildable Next.js App Router application and a reusable strict TypeScript configuration.

Include:

* root `package.json`;
* `pnpm-workspace.yaml`;
* initial `turbo.json`;
* Node and package-manager declarations;
* `apps/web`;
* minimal Next.js App Router layout and page;
* shared TypeScript configuration;
* root scripts needed to start, type-check and build the web application;
* environment example only when required by the scaffold;
* concise setup documentation.

Do not include:

* Sanity Studio;
* Storybook or shared UI components;
* final portfolio sections;
* analytics or consent;
* testing infrastructure beyond anything strictly required by the scaffold;
* complete ESLint, Prettier or Stylelint configuration;
* deployment configuration.

Use `checkpointed` execution mode.

Prefer three checkpoints:

1. root workspace and package boundaries;
2. shared TypeScript configuration and Next.js scaffold;
3. installation, build verification and documentation.

Select only the skills genuinely required for this task.

Ask no more than three blocking questions. Use repository-consistent defaults for reversible decisions.

Return the draft status and wait for explicit approval before finalizing.
