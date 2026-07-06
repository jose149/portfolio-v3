I would register the final direction under the working name **Editorial Precision**: an architectural, editorial portfolio that communicates technical competence, discretion and premium service without resembling a conventional CV template.

Because generated mockups do not contain reliable design tokens, I have normalised the visual result into an exact implementation palette and documented the complete layout.

## 1. Canonical visual direction

# Editorial Precision

The portfolio must feel like a boutique digital studio, architectural publication or premium consultancy rather than a conventional developer résumé.

It communicates confidence through restraint: precise typography, generous negative space, architectural composition, related surface tones, subtle champagne accents and carefully controlled interaction.

The interface should be:

- elegant;
- modern;
- minimal;
- clean;
- slightly artistic;
- technically credible;
- warm but not casual;
- premium without being ostentatious.

The design must avoid:

- generic SaaS styling;
- résumé-dashboard aesthetics;
- excessive card grids;
- bright gold, orange or copper accents;
- neon or gamer styling;
- strong coloured shadows;
- decorative technology logos;
- excessive animation;
- unnecessary visual noise.

The light and dark themes are two expressions of the same identity. They preserve the same content, hierarchy, geometry and interaction patterns.

## 2. Final colour system

The primary accent is a **muted champagne / pale brass**, not brown, orange or bright yellow.

### Light theme

| Token              |     Value | Purpose                                |
| ------------------ | --------: | -------------------------------------- |
| Background         | `#F7F6F2` | Broken-white page background           |
| Main surface       | `#FCFBF8` | Cards, forms and inner panels          |
| Muted surface      | `#EFEEE9` | Secondary areas                        |
| Emphasised surface | `#E5E1D8` | Selected and expanded content          |
| Main text          | `#202527` | Dark ink                               |
| Muted text         | `#666C6C` | Metadata and supporting copy           |
| Border             | `#D8D3C9` | Hairlines and frames                   |
| Primary            | `#B7A06C` | Champagne accent                       |
| Primary strong     | `#857447` | Small accent text and selected borders |
| On primary         | `#171B1D` | Text over champagne buttons            |

The background should read as **broken white**, not cream or beige. Warmth comes from surfaces and champagne details rather than from a yellow page background.

### Dark theme

| Token              |     Value | Purpose                             |
| ------------------ | --------: | ----------------------------------- |
| Background         | `#081927` | Midnight dark blue                  |
| Main surface       | `#102332` | Cards and panels                    |
| Muted surface      | `#142B3A` | Secondary layers                    |
| Emphasised surface | `#1A3444` | Selected and expanded content       |
| Main text          | `#F4F2EA` | Warm ivory                          |
| Muted text         | `#AFB6B5` | Secondary text                      |
| Border             | `#304653` | Hairlines and panels                |
| Primary            | `#D3C184` | Champagne accent                    |
| Primary strong     | `#E0CE93` | Active labels and selected controls |
| On primary         | `#111A20` | Text over champagne buttons         |

The dark theme must remain blue, not charcoal-black. Champagne should look luminous against navy, but never orange.

## 3. Global design language

### Typography

Use an elegant contemporary serif for:

- hero statements;
- section titles;
- project names;
- selected experience roles;
- testimonials.

Use a clean sans-serif for:

- body text;
- navigation;
- buttons;
- forms;
- metadata;
- tabs;
- technology labels.

A monospace font may appear in tiny technical annotations, but never as a central visual feature.

### Layout

- Maximum content width: approximately `1280px`.
- Desktop grid: 12 columns.
- Tablet grid: 8 columns.
- Mobile grid: 4 columns.
- Desktop gutters: `48–72px`.
- Mobile gutters: `20–24px`.
- Section separation: approximately `96–176px`.
- Base spacing unit: `4px`.

The portfolio should not put every item inside a box. Editorial spacing, alignment and thin dividers should replace many conventional cards.

### Surfaces and depth

- Nearly flat default cards.
- One-pixel borders.
- Very restrained neutral shadows.
- Selected content uses a tonal shift, stronger hairline or side marker.
- Expanded content uses a more prominent surface with quieter inner panels.
- No champagne glow.

### Artistic details

Approved elements include:

- architectural arches;
- circular image crops;
- large partial circles;
- contour or topographic lines;
- thin geometric rules;
- a monogram seal;
- sculptural architectural imagery;
- asymmetrical but balanced compositions.

These motifs should connect sections without becoming background decoration everywhere.

---

# 4. Section layouts

## Header

The header is visually persistent and may become sticky.

### Desktop

- Monogram or logo on the left.
- Home, Projects, About, Experience and Contact navigation.
- Language selector.
- Primary contact CTA on the right.
- Approximate height: `72–88px`.
- Fine lower border or lightly translucent scrolled state.

The active section is identified by a small champagne marker or fine underline.

### Mobile

- Logo left.
- Language and menu controls right.
- Navigation opens in a full-screen panel or sheet.
- Contact remains prominently accessible.

## Hero

The hero introduces role, value and personality without looking like a developer-template banner.

### Left side

- Small professional label.
- Large name or positioning statement.
- Short value proposition.
- Primary CTA to Contact.
- Secondary CTA to Projects.

### Right side

A restrained architectural composition:

- arch;
- stone surface;
- isolated tree;
- sculptural plane;
- partial circle;
- fine contour lines.

It should suggest precision and sophistication rather than show a generic laptop or code screen.

Desktop split: approximately 5/7 or 6/6. On mobile, the visual appears beneath the copy.

## Projects

Projects is the central and most interactive section.

### Overview layer

Four concise project cards on desktop. Each contains:

- project number;
- name;
- type;
- representative image;
- short description;
- role;
- condensed stack;
- Live site;
- Case study;
- Source.

Overview cards use the lightest surface and minimal visual weight.

The selected project is indicated through:

- slightly stronger border;
- small side marker;
- subtle surface change;
- active project number.

No coloured shadow.

### Expanded project view

The selected project opens into a large, immersive panel.

#### Left panel

Repeats the overview information:

- project name;
- summary;
- role;
- type;
- stack;
- Live site;
- Case study;
- Source.

#### Navigation tabs

- Product
- Results / SEO
- Engineering
- Design

#### Main content

Can include:

- large product gallery;
- business goal;
- target audience;
- important features;
- commercial value;
- visits or active users;
- conversion, sales or booking growth;
- SEO positioning;
- Core Web Vitals;
- accessibility;
- stack;
- architecture;
- App Router reasoning;
- implementation challenges;
- design-system decisions;
- motion and responsive decisions.

The expanded container uses the theme’s **emphasised surface**. Internal modules return to the regular surface, creating depth through related tones rather than strong shadows.

On mobile, the expanded view becomes a vertical, page-like experience with horizontally scrollable tabs.

## About

About is the most human and editorial section.

### Composition

- Large portrait with circular or arched treatment.
- Contour lines flowing behind or beside it.
- Large statement about engineering and thoughtful design.
- Short professional introduction.
- Four lightweight editorial modules:

  1. Problems I enjoy solving
  2. How I work
  3. Broader experience
  4. Currently learning / building

- Working principles such as Clarity, Craft and Ownership.
- A small personal note outside software.

The four modules should use whitespace, numbering and dividers rather than four heavy cards.

The portrait remains naturally warm in both themes.

## Experience

Experience is an editorial professional ledger rather than a traditional CV.

### Header

- Section statement.
- Download résumé.
- LinkedIn.
- Filters:

  - All
  - Employment
  - Independent work
  - Education
  - Contributions

### Timeline

- Narrow year/category column.
- Larger content column.
- Most relevant role expanded.
- Previous roles shown more compactly.

An expanded entry includes:

- date;
- role;
- organisation;
- context;
- selected impact;
- stack;
- optional detail action.

### Supporting content

**Education and credentials**

- formal education;
- important qualifications;
- continuous development.

**Beyond commercial work**

- open source;
- teaching or mentoring;
- writing and talks.

**Reviews**

- one large testimonial;
- two smaller recommendations;
- clear attribution;
- no star ratings.

On mobile, the timeline becomes a straightforward vertical stack.

## Contact

Contact feels like an invitation, not an administrative form.

### Opening

A large statement such as:

> Have a project, opportunity or idea worth exploring?

### Intent selector

- A project
- A role
- Something else

The selection adapts one or two fields without replacing the entire form.

### Left column

- availability;
- email;
- LinkedIn;
- GitHub;
- approximate location;
- timezone;
- remote availability;
- expected response time;
- restrained monogram or contour motif.

### Right column

- name;
- email;
- company or organisation;
- topic;
- message;
- optional timeline;
- submit CTA;
- privacy note.

The form includes sending, success, validation and failure states.

## Footer

The footer closes the editorial composition.

It contains:

- monogram;
- “Designed with intention. Built to last.”;
- copyright;
- small navigation;
- LinkedIn;
- GitHub;
- email.

It should be compact and aligned rather than another large content block.

---

## 5. Motion and interaction

Approved motion:

- short line reveals;
- image-mask entrances;
- slight vertical reveals;
- smooth project expansion;
- tab crossfades;
- restrained CTA arrow movement;
- subtle form-focus transitions.

Recommended durations:

- microinteraction: `160–240ms`;
- component transition: `240–400ms`;
- larger reveal: `400–650ms`.

All movement must respect `prefers-reduced-motion`.

## 6. Responsive principles

Responsive design must preserve hierarchy rather than reproduce desktop geometry at a smaller scale.

- Hero visual moves below the content.
- Project cards stack or become a deliberate horizontal scroller.
- Expanded project becomes vertical.
- About portrait appears before the text modules.
- Experience timeline simplifies.
- Contact becomes one column.
- Touch targets are at least 44px.
- No accidental horizontal overflow.
