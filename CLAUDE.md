# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

Marketing/content site for Dra. Alejandra Téllez, a dermatologist in Bogotá, Colombia. All user-facing content is in Spanish (es-CO). Next.js App Router, statically exported and hosted on **GitHub Pages** at `alejandratellezderma.com` (repo: `github.com/alejandratellezlozada-commits/atellez-web`). There is no backend, database, or CMS — content is either hardcoded TypeScript or local MDX files.

`.vercel/project.json` is a leftover from an earlier Vercel deployment and is no longer the deployment target — ignore it.

## Commands

```bash
npm run dev      # start dev server
npm run build    # static export build -> writes to ./out
npm run start    # serve production build (Node mode; not how this site is actually deployed)
```

No lint or test scripts are defined in `package.json` — there is no test suite.

## Deployment

Push to `main` → `.github/workflows/deploy.yml` runs `npm run build` and publishes `./out` to GitHub Pages via `actions/deploy-pages`. Pages is configured with `build_type: workflow` (not a `gh-pages` branch) and a custom domain (`public/CNAME`). There is no separate staging environment — every push to `main` goes live.

To reproduce the deploy locally: `rm -rf out .next && npm run build`, then serve `./out` with any static file server. Before pushing changes that touch routing, metadata routes, or data fetching, do this locally first — static export fails at build time (not runtime) for anything that needs a server, and that failure only shows up in CI otherwise.

## Architecture

**⚠️ Next.js 16.2.6, not the Next.js in your training data.** Per `AGENTS.md`, read the relevant page under `node_modules/next/dist/docs/01-app/` before writing routing, data-fetching, or metadata code. Dynamic route params are already async here (`params: Promise<{ slug: string }>`, awaited in both `generateMetadata` and the page component — see `app/servicios/[slug]/page.tsx`) — follow that pattern for any new dynamic route rather than assuming the destructured-object form from older Next versions.

### Static export constraints (`output: "export"` in `next.config.ts`)

This site is prerendered entirely at build time — there is no Node server at runtime. This rules out several things that would otherwise be reasonable to reach for: Route Handlers that read the request, `cookies()`/`headers()`, Server Actions, ISR/`revalidate`, Middleware, and `next/image`'s default optimizing loader (`images.unoptimized: true` is set instead, so all images are served as-is — keep source images reasonably sized). Any new dynamic route needs `generateStaticParams()`; without it the build fails rather than falling back to server rendering.

Non-obvious Next 16 requirement: metadata route files (`sitemap.ts`, `robots.ts`, `opengraph-image.tsx`) must explicitly export `const dynamic = "force-static"` or the static export build fails with `"export const dynamic = 'force-static'/export const revalidate not configured on route ... with 'output: export'"`. All three already have it — carry it over if you add more metadata routes (e.g. a per-service `opengraph-image`).

`trailingSlash: true` is also set, so every route emits `.../index.html` — required for GitHub Pages to resolve clean URLs like `/blog/post-slug/` without a rewrite rule.

### Content sources — two different patterns

- **Services** (`lib/services.ts`): a single hardcoded `services: Service[]` array is the source of truth for `/servicios` and `/servicios/[slug]`. Each entry carries its own SEO fields (`keywords`, `faq`) that are reused both as rendered page content and as JSON-LD (`FAQPage`, `MedicalProcedure`) in the service detail page. To add/edit a service, edit this array directly — there's no content file.
- **Blog & noticias** (`content/blog/*.mdx`, `content/noticias/*.mdx`): frontmatter (`title`, `description`, `date`, `category`, `author`, `keywords`, `featured`, `image`) parsed with `gray-matter`, exposed through `lib/mdx.ts` (`getPost`, `getAllPosts`, `getPostSlugs`, `formatDate`), and rendered with `next-mdx-remote/rsc`'s `<MDXRemote>` in `app/blog/[slug]/page.tsx` and `app/noticias/[slug]/page.tsx`. `getAllPosts` reads the filesystem at request/build time — no caching layer.

### SEO / structured data

Every route sets its own `Metadata` (title/description/canonical/OG) and inline `<script type="application/ld+json">` blocks (schema.org `Physician`/`MedicalClinic` in `app/layout.tsx`, plus per-page `MedicalProcedure`, `FAQPage`, `BreadcrumbList`, etc.). The canonical domain, `https://alejandratellezderma.com`, is hand-written into every one of these individually (`metadataBase`, `canonical`, `openGraph.url`, JSON-LD `@id`/`url`, `app/sitemap.ts`'s `BASE_URL`, `app/robots.ts`) rather than derived from a shared constant. **If the domain ever changes again, it has to be updated in every file individually** — there is no single source of truth for it. Grep for `alejandratellezderma.com` to find every occurrence.

The contact email in `app/contacto/page.tsx`'s JSON-LD is currently `alejandratellezlozada@gmail.com` — a placeholder until a real `@alejandratellezderma.com` inbox exists. Update it once one does.

### Styling

Tailwind v4, CSS-first config — there is no `tailwind.config.*`. Color tokens are defined as CSS custom properties in `app/globals.css` `:root` and re-exposed to Tailwind via `@theme inline`. Most one-off component layout/spacing is done with inline `style={{ ... }}` objects referencing `var(--color-*)` tokens rather than Tailwind utility classes; Tailwind classes are used mainly for responsive grid/breakpoint behavior (`grid-cols-1 md:grid-cols-3`, etc.). Match whichever pattern the surrounding component already uses. Fonts are loaded via `next/font/google`: Cormorant Garamond (`--font-cormorant`, serif, used for headings) and Work Sans (`--font-work-sans`, body).

### Contact form has no backend

`components/ContactForm.tsx` is a client component that builds a `wa.me` (WhatsApp) deep link from form state and opens it — it never submits anywhere or stores data. `resend` is a dependency but is not wired up anywhere in the codebase currently.

### Reveal-on-scroll

`components/ScrollReveal.tsx` mounts once in `app/layout.tsx` and uses `IntersectionObserver` on any element with a `data-reveal` attribute — add that attribute to a `<section>` to opt it into the fade/slide-in animation rather than building a new observer.
