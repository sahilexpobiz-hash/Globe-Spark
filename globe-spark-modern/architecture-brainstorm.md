# GlobeSpark information architecture brainstorm

## Objective

The current homepage has a strong visual system, service overview, process, proof framework, FAQ, quote form, newsletter, and footer. Its weakest area is the “Service benefits” block: it currently reads as a short checklist rather than a professional explanation of business value. The next revision should make benefits feel like an operating model with clear outcomes, evidence cues, and a natural path into service pages.

## Service Benefits directions

### Direction A — Growth Operating System

This direction presents benefits as the practical systems a business gains: a clearer message, a discoverable content structure, a repeatable distribution rhythm, and a measurement loop. It is the strongest fit for GlobeSpark because it turns abstract benefits into durable capabilities rather than promises.

### Direction B — Before / After Decision Map

This direction pairs common marketing friction with the better operating state GlobeSpark helps create: scattered activity becomes a focused plan, low visibility becomes intentional discoverability, and unclear reporting becomes a decision dashboard. It is highly scannable and useful for prospects comparing agencies.

### Direction C — Signal Scorecard

This direction uses a compact editorial scorecard covering visibility, trust, consistency, conversion, and learning. It could be visually distinctive, but it risks implying a proprietary scoring system before GlobeSpark has a real methodology and data model.

## Recommended direction

Choose **Growth Operating System**, with a small Before / After comparison row inside it. The block should contain a sharp headline, a short explanation, four benefit cards, and a bottom “what changes” strip. Each card should answer three questions: what improves, why it matters, and what GlobeSpark actually helps put in place. Avoid invented percentages, ratings, client logos, or performance claims.

## Recommended homepage section order

| Order | Section | Responsibility |
|---:|---|---|
| 01 | Hero | State the positioning, audience, main outcome, and primary review CTA within the first screen. |
| 02 | Signal ticker | Create a compact transition into the service system; use once, not as a repeated divider. |
| 03 | What GlobeSpark solves | Explain the difference between activity and a useful marketing system. |
| 04 | Service pathways | Present Search, Content, Social, Paid, Local, and Measurement as distinct pathways into deeper pages. |
| 05 | Growth Operating System | Replace the current checklist with professional, outcome-led benefits and Before / After cues. |
| 06 | How the work moves | Keep the interactive four-step process and connect each step to a future service or insight page. |
| 07 | Proof framework | Keep evidence-safe proof language and add verified case studies only when available. |
| 08 | Who we are | Add a concise founder/studio point of view, working principles, and location/contact context. |
| 09 | FAQ | Keep practical questions about timing, collaboration, scope, SEO, and measurement. |
| 10 | Conversion block | Keep the quote form, but add a short “what happens next” sequence beside it. |
| 11 | Insights preview | Show three future article categories rather than placeholder articles: Search, Content, and Growth Decisions. |
| 12 | Newsletter | Keep the useful-signal signup with a clear expectation about frequency and topic. |
| 13 | Footer | Keep contact, navigation, legal links, and the primary CTA. |

## Missing sections to add before multipage work

The most important missing sections are **Service Pathways**, **Who We Are**, **What Happens Next**, and **Insights Preview**. Together they answer the four questions the current page leaves too implicit: “Which service is for me?”, “Who is behind the work?”, “What happens after I submit the form?”, and “Can I evaluate the agency’s thinking before contacting it?”.

## Multipage architecture

| Route | Page purpose | Primary CTA |
|---|---|---|
| `/` | Homepage and positioning overview | Request a focused review |
| `/services` | Service directory and pathway selection | Choose a service |
| `/services/search-visibility` | SEO, technical foundations, local visibility, and intent mapping | Review your visibility |
| `/services/content-and-messaging` | Content strategy, editorial systems, landing pages, and messaging | Clarify your message |
| `/services/social-and-paid` | Social distribution, paid acquisition, and campaign support | Plan a campaign |
| `/services/measurement` | Analytics, reporting, and decision loops | Make reporting useful |
| `/approach` | Detailed process, collaboration model, and working principles | Talk through your goals |
| `/about` | GlobeSpark point of view, team context, and location | Meet the studio |
| `/work` | Evidence-safe case-study index; publish only approved real work | Read a case study |
| `/insights` | Articles and practical marketing notes | Subscribe to the useful signal |
| `/contact` | Dedicated enquiry and next-step page | Send an enquiry |

## Content rules for the next build

GlobeSpark should sound practical, specific, and calm. Headlines should describe a business shift, not a marketing buzzword. Service copy should explain the work without guaranteeing rankings, revenue, or timelines. Proof should use verified case studies only; until then, the proof framework should be explicit about being a framework. Testimonials, ratings, review counts, client logos, and performance numbers should not be presented as real unless supplied and approved.

## Implementation sequence

First, replace the current benefits checklist with the selected Growth Operating System block and add the missing homepage sections in the order above. Second, establish shared route/navigation primitives and create the multipage shells. Third, populate service pages with distinct, evidence-safe content and connect every CTA to a clear next step. The existing visual language—warm paper, graphite, Signal Cobalt, citrus accents, editorial numerals, and restrained imagery—should remain consistent across all routes.

## Implementation verification

The homepage now uses the selected Growth Operating System benefits block with four capability cards and a Before / After comparison. Service Pathways, studio principles, What Happens Next, and Insights Preview were added without introducing invented proof. The route foundation now supports `/services`, four service detail routes, `/approach`, `/about`, `/work`, `/insights`, and `/contact` with shared navigation, footer, CTAs, and page-level styling.

Desktop and mobile captures confirmed that the new benefit cards, service directory, service detail layouts, two-column route grids, mobile navigation, contact form, and footer stack cleanly without horizontal overflow.
