# Reanstone Engineering - AI Coding Instructions

## Project Context
- **Framework**: React 19 + Vite
- **Language**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS with custom brand configuration
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM (HashRouter)

## Architecture & Structure
- **Pages**: Located in `pages/`. Each file represents a full route view (e.g., `Home.tsx`, `About.tsx`).
- **Components**: 
  - Core UI components are centralized in `components/UI.tsx` (Button, Section, Heading, Card, RevealText).
  - Prefer exporting multiple small related components from a single file over creating many tiny files.
- **Layout**: `App.tsx` contains the main `Navbar` and `Footer` definitions and the Router setup.

## Coding Conventions

### Styling (Tailwind CSS)
- Use the custom brand color palette:
  - `text-brand-primary` (Purple/Primary)
  - `text-brand-secondary` (Pink/Secondary)
  - `text-brand-dark` (Dark background/text)
  - `bg-brand-light` (Light backgrounds)
- Use `font-display` for headings and `font-sans` for body text.
- **Layout Helper**: Always use the `Section` component from `components/UI.tsx` for top-level page sections to ensure consistent padding and responsiveness.
  ```tsx
  <Section className="bg-white">
    {/* content */}
  </Section>
  ```

### Animations (Framer Motion)
- **Scroll Reveal**: Wrap content in `<RevealText>` to trigger fade-up animations on scroll.
  ```tsx
  <RevealText delay={0.2}>
    <Heading>Title</Heading>
  </RevealText>
  ```
- Use `AnimatePresence` for conditional rendering (e.g., mobile menus).

### Components
- **Buttons**: Use the `Button` component from `components/UI.tsx`.
  - Variants: `primary`, `secondary`, `outline`, `text`.
  - Supports both `to` (Link) and `onClick` props.
- **Headings**: Use the `Heading` component for consistent typography sizing (`sm`, `md`, `lg`, `xl`).

### Routing
- Use `HashRouter` (aliased as `Router` in `App.tsx`).
- Use `Link` from `react-router-dom` for internal navigation.
- Scroll to top behavior is handled by the `ScrollToTop` component in `App.tsx`.

## Development Workflow
- **Dev Server**: `npm run dev` (Vite)
- **Build**: `npm run build`
- **New Pages**: 
  1. Create `pages/NewPage.tsx`.
  2. Add route in `App.tsx`.
  3. Add link in `Navbar` (inside `App.tsx`).

## Common Patterns
- **Icons**: Import from `lucide-react`.
- **Images**: Use external URLs (Unsplash/Mixkit) for placeholders, or local assets if available.
- **Responsive Design**: Mobile-first approach using Tailwind breakpoints (`md:`, `lg:`).
