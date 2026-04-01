# Kindergarten Photo Studio

Vercel-compatible landing page built with Next.js App Router and TypeScript.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- CSS (framework-free)

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  AnimationSection.tsx
  CampaignSection.tsx
  ContactSection.tsx
  Container.tsx
  FeatureGrid.tsx
  GallerySection.tsx
  Header.tsx
  HeroSection.tsx
  ImageWithFallback.tsx
  LeadForm.tsx
  PackagesSection.tsx
  ProductSection.tsx
  SectionHeader.tsx
  StickyContactBar.tsx
data/
  site.ts
public/
  images/
  placeholders/
```

## Local Development

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run lint
npm run build
```

## Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Make sure the project root is the folder that contains `package.json`.
4. Vercel will detect Next.js automatically.
5. Deploy.

## Content Management

All editable business content is centralized in `data/site.ts`.

You can update:
- company name
- phone, email, WhatsApp and address
- campaign text and date range
- package, gallery and product content
- SEO keywords and metadata text
- CTA labels and starting price emphasis

## Images

Expected custom assets should be added under `public/images/`:

```text
public/images/
  logo.jpg
  paket_dijital.jpg
  paket_album.jpg
  paket_standart.jpg
  paket_full.jpg
  galeri_01.jpg
  galeri_02.jpg
  galeri_03.jpg
  galeri_04.jpg
  galeri_05.jpg
  galeri_06.jpg
  urun_akordiyon.jpg
  urun_vesikalik.jpg
  urun_kanvas.jpg
  urun_cerceve.jpg
  urun_magnet.jpg
  urun_dijital.jpg
```

If any image is missing, the UI falls back to a built-in placeholder instead of breaking.

## Notes

- Metadata is configured in `app/layout.tsx`.
- Structured data is configured in `app/page.tsx`.
- The quick lead form opens a prefilled WhatsApp message instead of failing silently.
- The design is responsive and optimized for a single-page landing flow.
