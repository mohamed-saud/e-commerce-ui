Project: e-commerce-ui (client)

Summary
- Small Next.js (app router) storefront scaffold using TypeScript, Tailwind v4 and Next 15.
- UI components live in `src/components`; routes & layout are in `src/app` using the App Router.

Big-picture architecture
- App router: pages are under `src/app/*`. `layout.tsx` composes global UI (`NavBar`, `Footer`).
- Component boundaries: presentational components in `src/components` (some are server, some are client).
  - If a component uses React state, hooks, or `next/navigation`, it must be a client component (add `"use client"` at the top).
- Data flow: currently product data is hard-coded in `src/components/ProductList.tsx`. Expect eventual server/data fetches from API routes or external services.
- Types & validation: `src/types.ts` contains shared TypeScript types and Zod schemas (shipping/payment). Use these for typing forms and cart items.

Critical developer workflows
- Run dev (uses turbopack): `pnpm dev` (or `npm run dev`). This runs `next dev --turbopack` as defined in `package.json`.
- Build: `pnpm build` → `next build`. Start prod locally with `pnpm start`.
- Lint: `pnpm lint` runs `next lint`.

Project-specific patterns and examples
- App Router conventions: route components under `src/app` may be async server components. Example: `src/app/page.tsx` is async and reads `searchParams`.
- Client vs Server components: look for `'use client'` at file top. Example client components using navigation/state:
  - `src/components/ProductCard.tsx` (has `useState` and `'use client'`)
  - `src/components/Categories.tsx` and `Filter.tsx` use `next/navigation` hooks (`useRouter`, `useSearchParams`, `usePathname`) and must be client components.
- URL-driven filters: components manipulate `URLSearchParams` and call `router.push(`${pathname}?${params.toString()}`, { scroll: false })` to update filters without full reload (see `Filter.tsx` and `Categories.tsx`).
- Images & public assets: images are served from `public/` (e.g., `public/products/*`, `/featured.png`, `/logo.png`). Use `next/image` with `fill`/`priority` patterns already present.
- Icons: `lucide-react` is used across components for SVG icons.
- Forms & validation: use the Zod schemas exported from `src/types.ts` (`shippingFormSchema`, `paymentFormSchema`) for backend/client validation and type inference.

Notable, discoverable implementation details
- Temporary data: `ProductList.tsx` contains an in-file `products` array — treat it as placeholder data for integration with a real API.
- Cart typing without implementation: `src/types.ts` includes `CartStoreStateType` and `CartStoreActionsType` (no store file detected). If you implement a store (Zustand/Redux/Context), match these types.
- Fonts: `layout.tsx` uses `next/font/google` imports (`Geist`, `Geist_Mono`) and attaches CSS variables to `body`.

Conventions & style
- Keep components small and focused in `src/components`; pages and layout go in `src/app`.
- Use TypeScript types from `src/types.ts` rather than ad-hoc types when possible.
- Tailwind utility classes are used inline; follow existing class patterns (responsive prefixes like `sm:`, `md:` etc.).

Integration points to check when editing
- Public assets under `public/` and `src/components/*` image `src` usage.
- Navigation hooks live in `next/navigation` and require client components.
- Zod schemas in `src/types.ts` are the canonical validation shapes.

Quick examples for common edits
- Add a client-only component that reads/updates URL params:
  - top of file: `"use client"`
  - import from `next/navigation`: `useRouter`, `useSearchParams`, `usePathname`
  - update params with `const params = new URLSearchParams(searchParams); params.set('foo','bar'); router.push(`${pathname}?${params.toString()}`, { scroll: false })`
- Use shared types:
  - `import { ProductType } from '@/types'`

Notes for AI code assistants
- Prefer minimal, focused changes. Don't replace large files unless required.
- Preserve the App Router conventions: avoid turning server components into client components unless needed.
- When adding state or browser APIs to a component, add `"use client"` and keep the import footprint small.
- Reference the following files when reasoning about UI/data patterns:
  - `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/products/page.tsx`
  - `src/components/ProductList.tsx`, `src/components/ProductCard.tsx`, `src/components/Categories.tsx`, `src/components/Filter.tsx`
  - `src/types.ts`

If any section above is unclear or you want more examples (e.g., integrating a cart store, wiring a backend API, or adding tests), tell me which area to expand.
