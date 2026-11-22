# Morpeace website — status

Last updated: 2026-11-22

## What is live
- **Site:** https://www.morpeace.com. Vite + React 19 + Tailwind 4 + GSAP, in `app/`.
- **Hosting:** Vercel project `morepeace` (Root Directory `app`). It deploys automatically on every push to `main`.
  There is also `.github/workflows/deploy.yml` (GitHub Pages).
- **Remote:** `git@github-tgc:girish-tgc/morpeace.git`, branch `main`.

## Where we are
- **/the-forest (Biodiversity Atlas):**
  - Monsoon 2026 survey section (80 birds, 34 butterflies, 7 frogs, 22 spider genera).
  - Nakshatra Van section (27 + 40 + 12 = 79 saplings, July 2026).
  - Tree census, April–October 2026: 1,063 trees, 117 species, 136.9 t CO₂e, Shannon 3.22, Simpson 0.90, 84% native.
- **Tree numbers come from data, not hand edits.** To update them:
  1. Export the CSV from tgctree.
  2. Run `python3 -I scripts/trees-to-census.py <file.csv>` (it writes `app/src/data/treeCensus.ts`).
  3. If it adds new species, add their names and origin to `app/src/data/species.ts`.
  4. Rebuild.
- **Fauna data:** `app/src/data/fauna.ts` and `checklists.ts`.
- **Nakshatra Van data:** `app/src/data/nakshatraVan.ts`.

## Checks (run in `app/`)
- `npx tsc -b && npm run lint && npm run build`
- `prebuild` regenerates `public/sitemap.xml`, which changes only the dates. Do not commit it unless the pages changed.
- A chunk-size warning (> 500 kB) is known and older than this work.

## Next
- Winter 2026–27 survey round: add the new birds, butterflies and spiders.
- The baseline table still shows "Next survey: Q4 2026". Set the real dates.
- Mobile design pass by a designer: see `docs/mobile-ux-followup.md`.

## Open items / decide
- **Tree CSV:** every row is still "draft". Verify it in tgctree.
- **Nakshatra report:** one place says 82 → 161 species, another says 82 → 136. The site uses 136. Check with Aboli.
- **Bird checklist:** it shows 81 names, but the site says 80 species.
- **Native label:** chikoo, guava, sitaphal, ramphal and coconut are marked native, following the April report. They are not native to India. Correcting them lowers 84% to about 75%.
- **Tamarind #360:** it has three stems recorded (8,971 kg CO₂e). Is it one tree or three?
- **Fungi:** names are descriptions only, not identified species.
- **Untracked folders:** `app-next/` (a Next.js copy), `other material/` and root image files are not in git. Keep or delete?
