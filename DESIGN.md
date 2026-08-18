---
name: Neon Kinetic
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#bcc7de'
  on-secondary: '#263143'
  secondary-container: '#3e495d'
  on-secondary-container: '#aeb9d0'
  tertiary: '#c5cce6'
  on-tertiary: '#283044'
  tertiary-container: '#a9b1ca'
  on-tertiary-container: '#3c4459'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The design system is engineered for a high-performance gaming aesthetic that prioritizes immersion and clarity. The brand personality is technical, energetic, and forward-leaning, targeting a demographic that values speed and precision.

The style is a fusion of **Modern Corporate** and **Glassmorphism**, utilizing deep obsidian surfaces contrasted against vibrant, "glowing" interactive elements. It avoids the clutter of traditional "gamer" aesthetics in favor of a refined, streamlined interface that feels like a premium heads-up display (HUD). The emotional response should be one of focused intensity and digital sophistication.

## Colors

The palette is strictly dark-mode, anchored by a deep slate background. 

- **Primary (#38bdf8):** An electric cyan used for critical actions, active states, and focus indicators. It should be treated as a light source within the UI.
- **Secondary (#1e293b):** The primary surface color for cards, modals, and navigation bars.
- **Tertiary (#0f172a):** Used for inset elements, such as input fields or well-containers, to create a sense of depth.
- **Neutral (#94a3b8):** Used for secondary text and icons to ensure legibility without competing with the primary accent.

Apply a 10-15% opacity version of the primary color for "ghost" surfaces and hover states to maintain the glowing aesthetic.

## Typography

This design system utilizes a tiered typographic approach to reinforce its technical nature.

- **Headlines:** Use **Sora** for its geometric, futuristic construction. Tighten letter spacing on larger sizes to create a dense, high-impact look.
- **Body:** Use **Hanken Grotesk** for long-form content. It provides a clean, contemporary feel that balances the boldness of the headings.
- **Labels/Data:** Use **JetBrains Mono** for small labels, tags, and technical metadata. The monospaced nature emphasizes the "system" feel of the interface.

All text should default to high-contrast white (#f8fafc) for primary content and slate-400 (#94a3b8) for secondary information.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a 12-column structure for desktop and a 4-column structure for mobile. 

- **Vertical Rhythm:** Built on a 4px baseline grid. All component heights and margins should be increments of 4.
- **Gaps:** Use 20px (gutter) for standard element spacing within a grid.
- **Containers:** Content should be constrained to a max-width of 1440px on large screens, centered with fluid margins.
- **Adaptation:** On mobile, reduce "XL" padding to "LG" to maximize screen real estate while maintaining the signature breathability of the design system.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Subtle Glows** rather than heavy shadows.

- **Base Layer:** #0b0f19 (Background).
- **Raised Layer:** #1e293b (Secondary) with a 1px border of #334155 to define edges.
- **Overlay Layer:** #1e293b with a subtle outer glow using the primary color at 5% opacity, used for modals or active cards.
- **Interactive States:** Use a `drop-shadow` with a blur radius of 12px using the primary color (#38bdf8) at 30% opacity to simulate a neon emission. 

Avoid traditional black shadows; depth is perceived through color luminosity and border definition.

## Shapes

The shape language is consistently rounded to soften the "hard-tech" aesthetic, making the UI feel approachable yet modern.

- **Standard Components:** 0.5rem (8px) radius for inputs and small buttons.
- **Cards & Modals:** 1.5rem (24px) radius (`rounded-xl`) to create a distinct, containerized look.
- **Tags/Pills:** Fully rounded (500px) to differentiate them from functional buttons.

## Components

- **Buttons:** Primary buttons use a solid fill of the primary color with dark text. Secondary buttons use a transparent background with a 1px primary-colored border. On hover, all buttons should trigger a subtle primary-colored outer glow.
- **Input Fields:** Use Tertiary (#0f172a) as the fill color. The border should be #334155, turning Primary (#38bdf8) on focus with a faint inner glow.
- **Chips/Tags:** Styled as translucent pills. Use the primary color at 10% opacity for the background and 100% opacity for the text. 
- **Cards:** Utilize the Secondary (#1e293b) surface. Ensure a 1px border is applied to maintain separation from the background.
- **Lists:** Items should be separated by a subtle 1px line (#1e293b) or contained within individual "ghost" tiles (background: white @ 3% opacity) on hover.
- **Progress Bars:** Background should be Tertiary (#0f172a). The fill should be a gradient from Primary (#38bdf8) to a slightly darker cyan, creating a "charged" effect.