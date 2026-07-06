---
name: sanity
description: Build, review, debug, or refactor Sanity Studio schemas, GROQ queries, TypeGen output, content clients, preview, live content, and visual editing integrations.
compatibility: Requires a Sanity project. Follow the installed Sanity, @sanity/client, and framework integration versions.
metadata:
  version: "1.0"
---

---

# Sanity workflow

## Before coding

1. Inspect `package.json`, the lockfile, `sanity.config.*`, `sanity.cli.*`, schemas, clients, and existing queries.
2. Determine the installed `sanity`, `@sanity/client`, and framework integration versions.
3. Read only the relevant official Sanity documentation for those versions. Use the official Sanity MCP server when configured.
4. Follow the accepted content model and framework-specific integration guide.
5. Do not upgrade packages, deploy schemas, mutate content, or change datasets without explicit approval.

## Implementation rules

- Model content by meaning and editorial purpose, not by its current visual layout.
- Prefer explicit domain schemas over a generic page builder unless the specification requires composable sections.
- Define schemas with `defineType`, `defineField`, and `defineArrayMember`.
- Give fields clear names, titles, descriptions, validation, and useful previews.
- Use references for independently managed content and embedded objects for content owned by their parent.
- Add alternative text for meaningful images and enable hotspot or crop only when the design uses them.
- Keep Sanity access in a small integration layer. Presentation components must not query Sanity directly.
- Define GROQ queries with `defineQuery`, use parameters instead of string interpolation, and project only the fields the application needs.
- Use Sanity TypeGen for schema and query-result types. Never edit generated types manually.
- Treat Studio schema validation as editor guidance, not runtime security; validate untrusted content again at application boundaries when required.
- Set `projectId`, `dataset`, and `apiVersion` explicitly. Choose caching or CDN behaviour deliberately for each client.
- Public rendering must use published content. Drafts and preview data require authenticated draft or preview mode.
- Keep write tokens and preview credentials server-only. Use the least-privileged token possible.
- Follow the official framework guide for live content and visual editing; do not recreate its cache, draft-mode, or source-map behaviour manually.
- Keep content migrations explicit, reviewable, repeatable, and separate from normal rendering code.
- Use transactions for related mutations when partial updates would leave invalid content.

## Validation

Run the repository scripts when available. For schema or query changes, include the equivalent of:

```bash
pnpm exec sanity schema extract
pnpm exec sanity typegen generate
pnpm typecheck
pnpm lint
pnpm test
pnpm build
pnpm check
```

Also verify affected documents in Studio and confirm public pages do not expose drafts or credentials.
