# Hero and Navigation Specification

## Overview

- Target files: `src/components/SiteNav.tsx`, `src/components/HeroSection.tsx`
- Screenshot: `docs/design-references/heynesh.com/reference-desktop-1440.png`
- Interaction model: fixed navigation; click-driven mobile menu; static layered hero

## Structure

- Fixed navigation above all content
- Hero contains oversized `MANAV` wordmark, portrait, floating cards, role heading, short pitch, and CTAs

## Exact reference styles

- Body background: `rgb(213, 207, 190)`
- Desktop H1: `76.32px / 78.61px`, white
- Mobile H1: `43.64px / 44.95px`, white
- Header: fixed
- Desktop page width: 1440px capture
- Mobile header: 390px wide and approximately 61px high
- Mobile header padding: `0 20px`
- Mobile hero retains the oversized wordmark and layered portrait

## Local content

- Wordmark: `MANAV`
- Eyebrow: `Data Engineer · ML Systems · Amsterdam`
- H1: `Data systems, engineered for real decisions.`
- Pitch: `I build reliable data platforms and production ML workflows - from streaming telemetry to governed enterprise analytics.`
- Stats: `3+ years in data`, `M.Sc. Computer Science`, `Amsterdam, NL`
- CTAs: `Explore my work`, `Download resume`

## Responsive behavior

- Desktop: central portrait with background wordmark; role copy sits across the lower hero; full navigation links visible.
- Tablet: portrait and copy use two columns; secondary links reduce.
- Mobile: compact three-control header; portrait leads; headline overlays the lower image region; chips wrap around the portrait; CTAs stack.

## States

- Nav links and buttons lift/shift on hover.
- Mobile menu opens full screen and locks body scroll.
- All focusable elements show an acid-yellow focus outline.

