---
id: 000-foundation
status: accepted
---

---

# Portfolio workspace foundation

## Goal

Establish a maintainable, production-oriented workspace for the portfolio platform.

The completed foundation must support:

- a Next.js and React frontend;
- strict TypeScript;
- Sass and shared design tokens;
- a separate Sanity Studio;
- reusable UI components documented through Storybook;
- pnpm workspaces and Turborepo;
- consistent formatting and static analysis;
- unit, component, accessibility and end-to-end testing;
- optional consent-gated analytics;
- continuous integration.

The foundation must enable later portfolio sections to be implemented independently through SDD tasks.

## Target repository structure

```text
apps/
  web/
  studio/

packages/
  ui/
  sanity/
  typescript-config/

specs/
  agents/
  skills/
  features/
  tasks/

docs/
  decisions/
  design/
```

Additional packages may be introduced only when a concrete requirement justifies them.

## Applications

### Web

`apps/web` contains the public portfolio.

It must use:

- Next.js App Router;
- React;
- TypeScript;
- Sass;
- shared UI components;
- Sanity-backed content where specified.

### Studio

`apps/studio` contains the Sanity Studio.

It must:

- run independently from the web application;
- own content schemas and editor configuration;
- support portfolio content without coupling presentation logic to the CMS.

## Shared packages

### UI

`packages/ui` owns reusable visual components, shared styles and Storybook configuration.

It must not own complete page composition.

### Sanity

`packages/sanity` owns frontend Sanity integration such as:

- client configuration;
- queries;
- image utilities;
- data mapping boundaries.

Sanity schemas remain owned by `apps/studio`.

### TypeScript configuration

`packages/typescript-config` owns reusable strict TypeScript configurations.

## Engineering capabilities

The finished foundation must provide:

- pnpm workspace discovery;
- Turborepo task orchestration;
- strict TypeScript;
- ESLint;
- Prettier;
- Stylelint;
- Sass modules and shared tokens;
- Storybook;
- Vitest;
- React Testing Library;
- automated Storybook accessibility checks;
- Playwright;
- environment-variable examples;
- repository quality scripts;
- CI validation.

## Analytics

The architecture may support:

- Google Analytics;
- Hotjar.

Both integrations must be optional and must not initialize before the required visitor consent.

The foundation does not define the final analytics event taxonomy.

## Quality commands

The completed workspace should expose repository scripts equivalent to:

```bash
pnpm dev
pnpm build
pnpm lint
pnpm format:check
pnpm stylelint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm storybook
pnpm build-storybook
pnpm check
```

The exact commands remain controlled by repository configuration.

## Constraints

- Use simple package boundaries.
- Do not introduce hypothetical shared packages.
- Do not implement the complete portfolio during foundation work.
- Do not hard-code production CMS content.
- Do not commit secrets.
- Do not introduce analytics without consent handling.
- Do not upgrade or add unrelated dependencies.
- Record architecture-significant decisions in ADRs.

## Not included

The foundation does not include:

- final Header, Hero, Projects, About, Experience or Contact implementation;
- final Sanity content;
- a production contact-form backend;
- authentication;
- final deployment configuration;
- final analytics tracking events;
- a complete consent-management platform;
- final responsive visual implementation.

## Feature-level acceptance criteria

The feature is complete when:

- the workspace installs successfully through pnpm;
- the web application starts and builds;
- Sanity Studio starts and builds independently;
- Storybook starts and builds;
- the web application can consume the shared UI package;
- shared TypeScript configuration is active;
- linting, formatting and Stylelint commands pass;
- unit and component tests run;
- Playwright can execute a basic browser journey;
- automated accessibility checks are configured;
- optional analytics remain disabled without consent;
- the repository quality gate passes;
- setup documentation describes the local development process.

## Planned implementation tasks

1. `foundation-01-workspace-web-bootstrap`
2. `foundation-02-code-quality`
3. `foundation-03-ui-storybook`
4. `foundation-04-sanity-studio`
5. `foundation-05-testing-accessibility`
6. `foundation-06-analytics-consent`
7. `foundation-07-ci-final-verification`
