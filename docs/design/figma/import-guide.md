# Import the structured frames into Figma

## Included formats

The SVGs are editable vector reconstructions with named groups for sections and major components. They are intended as a structured starting point, not as a replacement for native Figma components.

SVG import does not automatically create:

- Auto Layout;
- constraints;
- variables;
- components and variants;
- prototypes.

## Import order

1. Create a Figma page named `Portfolio / Final`.
2. Drag in `figma-import/frames/desktop/00-combined.svg` as the overview.
3. Drag in the complete desktop light and dark pages.
4. Drag in the individual desktop sections.
5. Drag in the two mobile full-page frames.
6. Rename the roots using `frame-registry.json`.

## Convert the imported vectors into native Figma structure

1. Select an imported SVG root and use **Frame selection**.
2. Keep the full-page versions locked as visual references.
3. Use the individual section files to reconstruct native frames.
4. Apply Auto Layout to repeated groups.
5. Create components for:
   - Button
   - Navigation item
   - Project card
   - Project detail tab
   - Metric tile
   - Timeline entry
   - Testimonial
   - Contact field
6. Create variants for:
   - light / dark;
   - default / selected;
   - collapsed / expanded;
   - hover / focus / disabled;
   - valid / error / submitting / success.
7. Replace fonts with:
   - `Cormorant Garamond`
   - `Inter`
8. Create Figma variables from `tokens-studio.json` or enter the values manually.

## Suggested Figma pages

- `00 · Foundations`
- `01 · Components`
- `02 · Desktop`
- `03 · Mobile`
- `04 · Prototype`
- `99 · References`

## Recommended variable collections

- `Theme / Light`
- `Theme / Dark`
- `Spacing`
- `Typography`
- `Radius`
- `Motion`

## Canonical source

After the native Figma frames have Auto Layout, variables and component instances, those native frames—not the imported SVG groups—should become the canonical design source.
