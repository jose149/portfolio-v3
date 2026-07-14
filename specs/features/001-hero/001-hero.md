---
id: 001-hero
status: accepted
---

# Hero section

## Goal

Implement the portfolio Hero section following the approved design direction in `docs/design`.

The Hero must introduce José Crespi as a frontend engineer, communicate a premium and trustworthy positioning, and guide users toward Contact and Projects.

## Design source

The implementation must follow:

- `docs/design/design.md`
- `docs\design\sections\hero.md`

If a reference file is missing, the agent must inspect the available design documentation and report the missing reference.

## Scope

Included:

- Hero section in `apps/web`
- semantic section structure
- responsive layout
- light and dark theme compatibility
- primary CTA to Contact
- secondary CTA to Projects
- approved portrait / visual asset usage when available
- Sass module styling
- accessibility and keyboard-safe links

Not included:

- full Header implementation unless already required by the current page shell
- Projects section
- About section
- animations beyond subtle CSS transitions
- final production copy beyond approved placeholder copy

## Content requirements

The Hero must include:

- eyebrow / professional label
- main headline
- highlighted phrase or editorial emphasis
- short value proposition
- primary CTA
- secondary CTA
- professional visual / portrait area
- small location or availability metadata when useful

## Visual requirements

The Hero must follow the “Editorial Precision” design direction:

- broken-white / ivory light theme
- midnight navy dark theme
- muted champagne accent
- elegant serif display typography
- clean sans-serif body typography
- architectural/editorial composition
- premium spacing
- no generic SaaS look
- no gamer/neon aesthetic
- no Tailwind
- Sass modules only

## Responsive requirements

Desktop:

- two-column editorial layout
- copy on the left
- visual/portrait on the right
- generous spacing and strong hierarchy

Mobile:

- single-column layout
- copy first
- visual below
- CTAs remain reachable
- no horizontal overflow

## Accessibility requirements

- Hero must be inside a semantic `section`
- heading hierarchy must remain valid
- CTA links must have accessible names
- decorative elements must not be announced
- portrait image must have meaningful alt text if it represents José
- focus states must remain visible
- layout must be usable at 200% zoom
- motion must respect `prefers-reduced-motion`

## Acceptance criteria

- Hero renders on the homepage.
- Hero follows the approved design tokens and does not introduce hard-coded unrelated colours.
- Hero uses Sass modules.
- Hero works in light and dark themes.
- Hero is responsive at desktop, tablet and mobile widths.
- Primary CTA links to Contact.
- Secondary CTA links to Projects.
- No Tailwind classes or dependencies are introduced.
- `pnpm lint` passes.
- `pnpm typecheck` passes.
- `pnpm build` passes.
