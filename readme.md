# Front-End Roadmap: 46 Projects

One small project a day, hand-coded in HTML, CSS and JavaScript, then TypeScript, React and Next.js. I design each project in Figma first, then build it from scratch to production standards: semantic, accessible, responsive and readable.

**Schedule:** Day 0 to Day 46, Monday to Saturday (Nov 22, 2026 to Jan 16, 2027).

## Phases

| Days | Phase | Focus |
| --- | --- | --- |
| 0–12 | Foundations | Semantic HTML, CSS layout, DOM, events, state |
| 13–18 | Async and data | fetch, async/await, error handling, APIs |
| 19–29 | Git and GSAP motion | Branching workflow, GSAP, ScrollTrigger |
| 30–46 | TypeScript, React, Next.js | Typed components, React state, Next.js apps |

## Projects

| Day | Project | What I practiced | Folder |
| --- | --- | --- | --- |
| 0 | About-me page | Time-based greeting, Clipboard API, `setTimeout`, dynamic footer year | [day-00](day-00) |
| 1 | Profile card with Follow button | Flexbox, design tokens, state + `render()` pattern, `classList.toggle`, `aria-pressed` | [day-01](day-01) |
| 2 | Responsive pricing page | CSS grid, media queries, styled switch, cards rendered from a JS object, monthly/yearly toggle | [day-02](day-02) |
| 3 | Accessible contact form | `FormData`, custom validation messages, `aria-invalid` + `aria-describedby`, `validity`, live character counter, focus on first error | [day-03](day-03) |

## How each project is built

1. Design it in Figma (desktop 1280, mobile 375) using a shared design system.
2. Build it with CSS custom properties for color, type, spacing and radius.
3. Check it: keyboard and focus states, no horizontal scroll at 375px, no console errors.
4. Commit in small steps and get a code review.

## Run locally

No build step. Open any `day-XX/index.html` in a browser.
