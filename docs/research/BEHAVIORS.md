# Behaviors

## Reference findings

- The header is fixed over the hero.
- Desktop navigation is split around the centered portrait.
- Mobile navigation becomes three compact controls: logo, primary CTA, menu.
- The hero uses layered depth: oversized background text, central portrait, floating glass cards, and foreground copy.
- Buttons use high-contrast yellow fills with small lift/scale hover feedback.
- Content sections reveal progressively while scrolling.
- Project cards are large, editorial, and image/gradient led with strong hover movement.
- Mobile keeps the oversized title but stacks the content and moves floating cards around the portrait.

## Local implementation

- Native smooth scrolling with `scroll-behavior: smooth`.
- Reduced-motion media query disables reveals, marquees, and transforms.
- `IntersectionObserver` adds `.is-visible` to elements with `[data-reveal]`.
- Navigation links use anchored scrolling and a mobile overlay menu.
- Cards translate upward by 6px on hover, with border and accent changes.
- Capability marquee runs continuously and pauses when reduced motion is requested.
- Mobile menu locks page scrolling while open.

