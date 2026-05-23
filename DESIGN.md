---
name: Vivid Lingua
colors:
  surface: '#f2fbff'
  surface-dim: '#c9dde6'
  surface-bright: '#f2fbff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e4f7ff'
  surface-container: '#ddf1fa'
  surface-container-high: '#d7ebf4'
  surface-container-highest: '#d2e6ef'
  on-surface: '#0b1e24'
  on-surface-variant: '#42493d'
  inverse-surface: '#21333a'
  inverse-on-surface: '#e0f4fd'
  outline: '#72796c'
  outline-variant: '#c1c9ba'
  surface-tint: '#366a2b'
  primary: '#12470b'
  on-primary: '#ffffff'
  primary-container: '#2b5f21'
  on-primary-container: '#9dd78b'
  inverse-primary: '#9bd689'
  secondary: '#785900'
  on-secondary: '#ffffff'
  secondary-container: '#fdc003'
  on-secondary-container: '#6c5000'
  tertiary: '#751c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#9e2900'
  on-tertiary-container: '#ffb8a4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b6f2a3'
  primary-fixed-dim: '#9bd689'
  on-primary-fixed: '#012200'
  on-primary-fixed-variant: '#1d5115'
  secondary-fixed: '#ffdf9e'
  secondary-fixed-dim: '#fabd00'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5b4300'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb5a0'
  on-tertiary-fixed: '#3b0900'
  on-tertiary-fixed-variant: '#862200'
  background: '#f2fbff'
  on-background: '#0b1e24'
  surface-variant: '#d2e6ef'
typography:
  display-lg:
    fontFamily: Nunito Sans
    fontSize: 48px
    fontWeight: '900'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Nunito Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Nunito Sans
    fontSize: 24px
    fontWeight: '800'
    lineHeight: 32px
  headline-md:
    fontFamily: Nunito Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Nunito Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 28px
  body-md:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Nunito Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Nunito Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 40px
  card-padding: 24px
  container-max-width: 1100px
  gutter: 16px
---

## Brand & Style
The design system focuses on a **Vibrant Minimalist** aesthetic, blending the cleanliness of modern SaaS with the high-energy engagement of gamification. It is designed to evoke a sense of optimism, momentum, and friendly competition. 

The visual language is characterized by "soft-touch" geometry—avoiding harsh angles in favor of generous radii that feel approachable and safe for learning. The interface prioritizes high legibility and intentional whitespace to prevent cognitive overload during study sessions. The target audience—social, competitive learners—will experience a UI that feels like a polished game: tactile, responsive, and rewarding.

## Colors
This design system utilizes a high-contrast palette to distinguish between functional areas and motivational triggers.

- **Primary (Forest Green):** Used for "Success" states, primary progress actions, and main navigation. It grounds the brand in growth and stability.
- **Secondary (Streak Gold):** Reserved exclusively for momentum indicators, streak counts, and reward-based iconography.
- **Tertiary (Challenge Orange):** High-alert color used for "Hard Mode" lessons, limited-time challenges, and competitive leaderboards.
- **Surface (Soft Light Blue):** A gentle background tint used to differentiate content cards from the pure white page background, reducing eye strain.
- **Accent (White):** Used for primary button text and elevated card surfaces to maintain a crisp, airy feel.

## Typography
The typography is powered by **Nunito Sans**, chosen for its rounded terminals and friendly, humanist character. 

- **Weight Strategy:** Headlines use ExtraBold (800) or Black (900) weights to create a "bubbly" and authoritative presence that stands out against flat illustrations.
- **Hierarchy:** Display sizes are reserved for milestone celebrations (e.g., "Level Up!"). Labels use a slightly increased letter-spacing and heavy weight to ensure clarity on small interactive elements like chips and tags.
- **Readability:** Body text maintains a SemiBold (600) weight for primary interactions to ensure the UI feels consistently bold and energetic, dropping to Regular (400) only for dense instructional text.

## Layout & Spacing
The design system employs a **Fixed Grid** approach for desktop to keep the learning experience focused and centralized, transitioning to a fluid model for mobile devices.

- **Grid:** A 12-column grid is used for dashboards, while lesson interfaces utilize a single-column "focus mode" (approx. 600px wide) to minimize distractions.
- **Rhythm:** An 8px linear scale governs all spacing.
- **Padding:** Content containers feature generous internal padding (24px+) to reinforce the minimalist, airy aesthetic.
- **Mobile Adaptivity:** On mobile, margins reduce to 16px, and multi-column leaderboard layouts reflow into vertical stacks, prioritizing the user's personal progress at the top.

## Elevation & Depth
This design system avoids heavy shadows in favor of **Tonal Layering** and **Soft Ambient Occlusion**.

- **Surface Tiers:** The base background is Pure White. Secondary containers sit on Soft Light Blue (#E1F5FE) backgrounds with no borders.
- **Shadows:** Only primary interactive cards and buttons use shadows. These are highly diffused: `0px 8px 24px rgba(43, 95, 33, 0.08)`. The shadows are slightly tinted with the Primary Forest Green to keep the palette feeling cohesive and "organic."
- **Press States:** Buttons utilize a "pseudo-3D" effect—a solid 4px bottom border in a darker shade of the button's color—which disappears on click to simulate a physical button being pressed.

## Shapes
The shape language is defined by **Extreme Roundedness (Pill-shaped)**.

- **Components:** Buttons, input fields, and chips use a fully rounded (pill) radius.
- **Containers:** Content cards and modals use `rounded-3xl` (approx 24px-32px) to maintain a soft, friendly "toy-like" quality.
- **Icons:** Iconography must follow the same rules—thick strokes (2px minimum) and rounded caps/joins to match the Nunito Sans typeface.

## Components
- **Buttons:** Primary buttons are "thick," utilizing the Forest Green with a darker 4px bottom-offset shadow. Text is always Bold and centered.
- **Chips/Badges:** Used for category selection (e.g., "Grammar", "Vocab"). These feature the Soft Light Blue background with Primary Green text.
- **Progress Bars:** Thick (12px+) tracks with fully rounded ends. The container is a light neutral, while the active fill uses a vibrant gradient or solid Primary Green.
- **Cards:** Used for lesson modules and friend profiles. Cards have a subtle 1px border (#CFE9F7) and the custom ambient green shadow.
- **Input Fields:** Large, pill-shaped fields with centered text for translation exercises, using a 2px Forest Green border when focused.
- **Streaks & Leaderboards:** High-gloss components using the Secondary Gold. Profiles in leaderboards should be rounded-xl with a subtle stroke to indicate "online" or "active" status.