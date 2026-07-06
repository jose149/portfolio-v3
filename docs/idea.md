# Product vision

The product is a high-quality personal portfolio website supported by a headless CMS.

The public website must:

- present the portfolio owner and their work;
- obtain editable texts and images from Sanity;
- be responsive and accessible;
- load quickly;
- provide strong SEO metadata;
- remain easy to extend with new sections;
- preserve a consistent visual system;
- demonstrate professional engineering standards.

The visible structure consists of:

1. A header as a navbar with a logo on the left, navigation links, laguage selector and a CTA button to contact;
2. A section "Home" that should contain:
   - My name.
   - My role.
   - A short value proposition.
   - Primary call to action to scroll to contact section.
   - Secondary call to action to scroll to my projects.
   - Restrained visual element.
3. A section "Projects" that should contain:
   Projects where each project card should contain:
   - Project name.
   - Short description.
   - Representative image.
   - Your role.
   - Relevant technologies.
   - Project type.
   - Link to the case study.
   - Live website and source-code links when available.
4. A section "About" which includes:
   - A short professional introduction.
   - The kind of problems I enjoy solving.
   - How O work with clients or teams.
   - My broader experience.
   - What I am currently learning or building.
   - A photograph of me.
5. A section "Experience" which includes:
   - Relevant employment.
   - Selected freelance work.
   - Education.
   - Important qualifications.
   - Open-source contributions, when meaningful.
   - Talks, teaching or technical writing, when applicable.
   - Reviews
6. A section "Contact" which should include:
   - A clear invitation.
   - Email address or contact form.
   - LinkedIn.
   - GitHub.
   - Current availability, when useful.
   - Approximate location or working timezone, when relevant.
7. A footer that should contain the logo.

## 1. Initial scope

- Public portfolio website.
- Sanity Studio for managing texts and images.
- Header and navigation.
- Sections
- Footer.
- Shared UI component library.
- Storybook component documentation.
- Responsive layout.
- Basic SEO and social metadata.
- Image optimisation.
- Accessibility foundations.
- Automated formatting, linting, type-checking and testing.
- Analytics
- Multilingual content
- Continuous integration validation.
- Advanced Sanity visual editing.

## 2. Technology baseline

The accepted core stack is:

- nextjs: routing, rendering boundaries, caching, Server Components, metadata and framework conventions.
- react: components, Hooks, state, Effects
- TypeScript;
- Sass;
- Sanity;
- Storybook;
- ESLint;
- Prettier;
- pnpm;
- pnpm workspaces;
- Turborepo;
- Vitest;
- Playwright;
- Automated accessibility checks.
- Stylelint;
- Statsig;
- Google Analytics;
- Hotjar;

- nextjs
- react
- typeScript
- sass
- sanity
- storybook
- eslint
- prettier
- pnpm
- pnpm-workspaces
- turborepo
- vitest
- playwright
- accessibility-testing
- stylelint
- statsig
