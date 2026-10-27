---
title: Design decisions
description: The rationale behind Hearthline’s information hierarchy, visual direction, interactions, and implementation.
---

## Start with the visitor’s decision

The page introduces the proposition, explains illustrative protection, describes the intended experience, answers questions, and offers a next step. Each section has a specific purpose.

| Page element | Intended purpose | Tradeoff |
| --- | --- | --- |
| Hero: “For the place you call home” | Establish relevance and an emotional connection | Needs concrete cover detail immediately below |
| Three approach statements | Introduce clarity, relevance, and a human tone | These express the concept’s principles, rather than verified service performance |
| Three cover categories | Make an abstract product easier to scan | A short overview cannot replace policy terms |
| Home imagery and editorial section | Connect protection to everyday life | Photography is illustrative and does not represent customers |
| Three proposed steps | Explain the intended direction of travel | The prototype implements only the introduction |
| FAQs | Resolve category questions without lengthening the first view | Some detail is less visible until expanded |
| Repeated quote action | Keep the next step accessible throughout the page | Repetition must not imply an operational quoting service |
| Documentation links | Let reviewers inspect the thinking behind the experience | Adds a portfolio destination to a consumer-style page |

## An established visual direction

Navy and white provide the primary palette. Muted teal identifies supporting details and actions. Serif headlines introduce warmth while a locally hosted sans-serif font supports navigation and body copy.

The intent is an established, polished presentation. Whether that presentation creates the right impression is a usability question, not an established outcome.

Home and interior photographs make the subject tangible without using invented testimonials, customer logos, ratings, or performance statistics. Images are stored locally and delivered in responsive WebP sizes. The hero is prioritised; the secondary image loads lazily.

## Make the prototype boundary clear

All “Get a quote” buttons open the same dialog explaining the portfolio concept. It offers a route into the case study and a way to return to the page. There is no form, premium estimate, or invented result.

Illustrative cover is identified next to the overview. The FAQ and footer also identify Hearthline as fictional. This leaves room for a credible product presentation while making the actual capability understandable.

## Accessibility and responsive behaviour

- One primary page heading and named navigation landmarks provide a clear structure.
- A skip link, visible focus indicators, and keyboard-operable controls support navigation.
- Native FAQ disclosures work with standard browser interactions.
- The quote dialog supports Escape, a labelled close button, focus containment, and returning focus to its opening button.
- Mobile navigation exposes its expanded state and keeps closed links outside the keyboard focus order.
- Layouts stack on smaller screens, and decorative motion is disabled when reduced motion is requested.

Automated checks can catch some failures. Manual review and testing with assistive-technology users remain part of the proposed validation work.

## Preserve an authoring workflow

The homepage is a custom Astro page. The case study uses the existing Starlight content collection at `/docs/`, preserving Markdown/MDX authoring, navigation, and search. Existing guide and reference content remains available at its previous URLs.

Marketing styles are loaded by the marketing layout. Documentation uses a small, separate theme adjustment, so future landing-page changes do not need to redesign the reading experience.

## Asset credits

- [Exterior photograph on Pexels](https://www.pexels.com/photo/1396122/).
- [Interior photograph on Pexels](https://www.pexels.com/photo/1571460/).
- Photographs sourced under the [Pexels licence](https://www.pexels.com/license/).
- DM Sans is locally hosted under the SIL Open Font License; the licence is included in `public/fonts/OFL.txt`.
- The Hearthline wordmark, house mark, and interface icons are SVG elements defined in the project.

[Next: Measurement and roadmap →](../measurement-and-roadmap/)
