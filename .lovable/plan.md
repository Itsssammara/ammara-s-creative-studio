# Pro Pre-Owned Phones featured case study

## Goal
Add a premium, fashion-inspired Pro Pre-Owned Phones project immediately before Gatesville Pet Centre while leaving every existing portfolio section and case study unchanged.

## What will be built
- Add the six supplied campaign slides in the requested order, using the first slide as the project cover.
- Introduce a dedicated Pro project presentation above the existing reusable case-study cards.
- Create an editorial opening layout with the `SOCIAL CAMPAIGN` label, large serif project name, role/year/category details, description, and four minimal badges.
- Add a wide 4:5 carousel with touch swipe, scroll snapping, desktop previous/next controls, active-slide dots, and smooth movement.
- Open carousel artwork in an accessible full-screen lightbox with close, previous, and next controls; support keyboard navigation and Escape.
- Add spacious alternating story sections for The Concept and Visual Direction, followed by five visual “Why It Works” cards.
- Preserve the burgundy scrapbook identity while giving the project its own blush-pink campaign accents, 24px corners, restrained shadows, layered artwork, and soft motion.

## Responsive behavior
- Desktop: editorial split layouts, subtle image layering/parallax, hover lift, and visible carousel arrows.
- Mobile: stacked content, prominent full-width artwork, finger swipe, compact dots, no horizontal page overflow, and comfortably sized lightbox controls.
- Respect reduced-motion preferences by minimizing transitions and disabling decorative parallax when requested by the device.

## Technical details
- Upload the six supplied images through the project asset flow and import their generated pointers.
- Build focused `ProCaseStudy`, carousel, and lightbox components inside the existing portfolio module, reusing current typography and motion helpers.
- Add only the semantic blush/hot-pink surface tokens needed for this project to the global design system.
- Keep the existing three case studies non-clickable; lightbox behavior applies only to the new Pro campaign.
- Add page-specific title, description, Open Graph title/description, `og:type`, and Twitter card metadata to the home page.
- Validate the carousel, lightbox, keyboard controls, and responsive layouts at desktop and mobile sizes.
