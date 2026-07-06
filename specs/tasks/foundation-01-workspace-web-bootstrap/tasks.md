# Execution checkpoints

## Checkpoint 1 - Root Workspace And Package Boundaries

- [x] Create the root `package.json` with workspace-level scripts for development, type-checking, and building the web application.
- [x] Declare the supported Node version and pnpm package manager.
- [x] Create `pnpm-workspace.yaml` covering `apps/*` and `packages/*`.
- [x] Create the initial `turbo.json` with tasks needed by this scaffold.

### Verification

```bash
pnpm install
```

### Expected result

* pnpm discovers the declared workspace packages.
* Workspace metadata is valid enough for dependency installation.
* No application source outside the permitted scope is introduced.

## Checkpoint 2 - Shared TypeScript Configuration And Next.js Scaffold

- [x] Create `packages/typescript-config` with reusable strict TypeScript configuration.
- [x] Create `apps/web` as a Next.js App Router workspace package using `create-next-app` or an equivalent command path.
- [x] Use scaffold selections for TypeScript, ESLint, App Router, Turbopack, pnpm, import alias `@/*`, no Tailwind, and Sass styling.
- [x] Add minimal App Router layout and page files.
- [x] Configure `apps/web` to consume the shared TypeScript configuration.

### Verification

```bash
pnpm typecheck
```

### Expected result

* TypeScript checks complete successfully.
* The web package uses the shared strict TypeScript configuration.
* The web package keeps the `@/*` import alias.
* The web development script uses Turbopack.
* Sass is present as the scaffold styling system and Tailwind is absent.
* The web application remains a minimal scaffold without final portfolio sections.

## Checkpoint 3 - Installation, Build Verification And Documentation

- [x] Ensure the root development and build scripts route through the workspace and Turbo configuration as appropriate.
- [x] Run the web build through the root script.
- [x] Add concise setup documentation for install, development, type-checking, and build commands.
- [x] Add an environment example only if the scaffold requires environment variables.

### Verification

```bash
pnpm dev
pnpm typecheck
pnpm build
```

### Expected result

* `pnpm dev` starts the web application through the root script.
* `pnpm typecheck` completes successfully.
* `pnpm build` completes successfully for the web application.
* Setup documentation covers the commands needed for local development.
