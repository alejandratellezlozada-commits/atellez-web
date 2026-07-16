# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

Marketing/content site for Dra. Alejandra Téllez, a dermatologist in Bogotá, Colombia. All user-facing content is in Spanish (es-CO). Next.js App Router, deployed on Vercel (see `.vercel/project.json`). There is no backend, database, or CMS — content is either hardcoded TypeScript or local MDX files.

## Commands

```bash
npm run dev      # start dev server
npm run build    # production build
npm run start    # serve production build
```

No lint or test scripts are defined in `package.json` — there is no test suite.

## Architecture

**⚠️ Next.js 16.2.6, not the Next.js in your training data.** Per `AGENTS.md`, read the relevant page under `node_modules/next/dist/docs/01-app/` before writing routing, data-fetching, or metadata code. Dynamic route params are already async here (`params: Promise<{ slug: string }>`, awaited in both `generateMetadata` and the page component — see `app/servicios/[slug]/page.tsx`) — follow that pattern for any new dynamic route rather than assuming the destructured-object form from older Next versions.

### Content sources — two different patterns

- **Services** (`lib/services.ts`): a single hardcoded `services: Service[]` array is the source of truth for `/servicios` and `/servicios/[slug]`. Each entry carries its own SEO fields (`keywords`, `faq`) that are reused both as rendered page content and as JSON-LD (`FAQPage`, `MedicalProcedure`) in the service detail page. To add/edit a service, edit this array directly — there's no content file.
- **Blog & noticias** (`content/blog/*.mdx`, `content/noticias/*.mdx`): frontmatter (`title`, `description`, `date`, `category`, `author`, `keywords`, `featured`, `image`) parsed with `gray-matter`, exposed through `lib/mdx.ts` (`getPost`, `getAllPosts`, `getPostSlugs`, `formatDate`), and rendered with `next-mdx-remote/rsc`'s `<MDXRemote>` in `app/blog/[slug]/page.tsx` and `app/noticias/[slug]/page.tsx`. `getAllPosts` reads the filesystem at request/build time — no caching layer.

### SEO / structured data

Every route sets its own `Metadata` (title/description/canonical/OG) and inline `<script type="application/ld+json">` blocks (schema.org `Physician`/`MedicalClinic` in `app/layout.tsx`, plus per-page `MedicalProcedure`, `FAQPage`, `BreadcrumbList`, etc.). These URLs are hand-written per page rather than derived from a shared constant.

**Known inconsistency:** `app/sitemap.ts` and `app/robots.ts` hardcode `https://atellez-web.vercel.app`, while every page's own `canonical`/`openGraph.url`/JSON-LD `@id` hardcodes `https://www.alejandratellez.com`. If you touch URLs, either fix all occurrences consistently or ask which domain is canonical before changing just one file.

### Styling

Tailwind v4, CSS-first config — there is no `tailwind.config.*`. Color tokens are defined as CSS custom properties in `app/globals.css` `:root` and re-exposed to Tailwind via `@theme inline`. Most one-off component layout/spacing is done with inline `style={{ ... }}` objects referencing `var(--color-*)` tokens rather than Tailwind utility classes; Tailwind classes are used mainly for responsive grid/breakpoint behavior (`grid-cols-1 md:grid-cols-3`, etc.). Match whichever pattern the surrounding component already uses. Fonts are loaded via `next/font/google`: Cormorant Garamond (`--font-cormorant`, serif, used for headings) and Work Sans (`--font-work-sans`, body).

### Contact form has no backend

`components/ContactForm.tsx` is a client component that builds a `wa.me` (WhatsApp) deep link from form state and opens it — it never submits anywhere or stores data. `resend` is a dependency but is not wired up anywhere in the codebase currently.

### Reveal-on-scroll

`components/ScrollReveal.tsx` mounts once in `app/layout.tsx` and uses `IntersectionObserver` on any element with a `data-reveal` attribute — add that attribute to a `<section>` to opt it into the fade/slide-in animation rather than building a new observer.
