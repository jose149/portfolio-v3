# Export Figma frames into the repository

## Recommended folder structure

```text
docs/
  design/
    design-system.md
    figma/
      README.md
      file.url
      frame-registry.json
      node-map.json
    references/
      desktop/
        light/
        dark/
      mobile/
        light/
        dark/
      states/
    assets/
      logo/
      icons/
      illustrations/
```

## Export strategy

### Export approved frames as PNG at 2×

Use PNG references for:

- pull-request visual review;
- local AI-agent context;
- visual regression planning;
- documenting approved light/dark and desktop/mobile states.

Example filenames:

```text
docs/design/references/desktop/light/full-page@2x.png
docs/design/references/desktop/light/projects-expanded@2x.png
docs/design/references/desktop/dark/about@2x.png
docs/design/references/mobile/light/contact@2x.png
```

### Export SVG only for reusable vector assets

Commit SVG for:

- monogram and logo;
- icons;
- contour artwork;
- architectural decorative shapes;
- other vectors used by the implementation.

Do not make a full-page SVG the only design reference once the native Figma design exists.

### Record canonical Figma links

Create `docs/design/figma/file.url` containing the canonical Figma file URL.

Create `node-map.json` with direct links to important frames:

```json
{
  "desktop.light.projects": {
    "name": "Portfolio/Desktop/Light/Projects/Expanded",
    "url": "PASTE_SELECTED_FRAME_URL"
  }
}
```

Select a frame before copying its Figma link so the URL points to that frame.

## Steps in Figma

1. Select an approved frame.
2. In the right sidebar, add an export setting.
3. Choose PNG.
4. Set the scale to 2×.
5. Export using lowercase kebab-case filenames.
6. Put the file in the matching `docs/design/references/` directory.
7. Add an SVG export setting only to actual vector assets.

## Naming

Use stable names:

```text
header-hero@2x.png
project-card-selected@2x.png
projects-expanded@2x.png
contact-form-error@2x.png
```

Do not add dates to canonical filenames; Git records the history.

## Figma MCP

When your VS Code agent supports MCP, configure the official Figma MCP server and provide the exact selected-frame link. The agent can retrieve variables, components, layout information and other structured context.

Keep the PNG exports in the repository even when MCP is configured. They remain useful for offline review and stable visual references.
