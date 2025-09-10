# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

All commands should be run from the project root:

- `npm run dev` - Start development server at `localhost:4321`
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview production build locally

## Technology Stack & Architecture

This is an **Astro-based vaporwave landing page** with the following key technologies:

### Core Framework
- **Astro** - Main framework for static generation and routing
- **React** - Interactive components as client-side islands (`client:load`, `client:visible`)
- **TypeScript** - Configured with strict mode and React JSX

### Styling & Design
- **Tailwind CSS 4.x** - All styling via utility classes (avoid custom CSS unless for complex animations)
- **Vaporwave aesthetic** - Dark theme with neon colors and retro-futuristic design
- **Custom fonts**: Monument Extended (titles), Inter (body text), VCR OSD Mono (accents)

### Animations & Graphics
- **GSAP** with ScrollTrigger - Complex animations and scroll-triggered effects
- **Three.js** via `@react-three/fiber` and `@react-three/drei` - 3D graphics in React components

## Project Structure

```
src/
├── pages/           # Astro pages and routing
├── layouts/         # Page layouts
├── components/      # Generic Astro components  
├── components/sections/  # Section-specific components
├── components/react/     # React components for interactivity
├── scripts/         # GSAP animation scripts
└── styles/          # Global CSS and font definitions
```

## Development Conventions

### Component Organization
- **Section components** must have unique semantic `id` attributes (e.g., `<section id="servicios">`) for GSAP ScrollTrigger targeting
- **React components** for client-side interactivity should be imported as Astro islands
- **File headers** should include commented file path (e.g., `// src/components/Hero.astro`)

### Styling Guidelines
- Use **Tailwind utility classes exclusively** - no inline styles or custom CSS except for animations
- Follow responsive design with Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`)
- Use Astro's `<Image />` component for optimized images

### Animation Patterns
- **GSAP animations** should be organized in separate script files in `/src/scripts/`
- Use **ScrollTrigger** for scroll-based animations with section IDs as triggers
- Import and initialize animations with `document.addEventListener('DOMContentLoaded')`

### Design System
- **Color palette**: Dark background (`#0D0B1A`), cyan neon (`#00F2FF`), magenta (`#FF00E5`), white text (`#F5F5F5`)
- **Typography**: Monument Extended for headings, Inter for body text, VCR OSD Mono for decorative elements
- **Responsive design** is mandatory for all components

## Key Files

- `src/styles/global.css` - Custom font definitions and Tailwind theme configuration
- `astro.config.mjs` - Astro configuration with React and Tailwind integrations
- `cursor.rules` - Detailed development guidelines and coding conventions
- `DESIGN_BRIEF.md` - Complete visual design specifications and brand guidelines

## External Dependencies

GSAP is loaded via CDN in the layout head. Three.js and React Three Fiber are installed as npm dependencies for 3D components.