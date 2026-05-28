# MadaVoyage

Starter Next.js autonome pour une agence de voyage a Madagascar, pense comme un projet portfolio duplicable pour des clients.

## Architecture

- `app/` : routes Next, metadata SEO, sitemap, robots.
- `components/layout/` : elements globaux comme le header.
- `components/sections/` : blocs de page reutilisables et rearrangeables.
- `data/` : contenu client modifiable sans toucher aux composants.
- `lib/site.ts` : configuration de marque, URL, contact et reseaux.
- `lib/seo.ts` : JSON-LD pour SEO et GEO.
- `public/images/madavoyage/` : assets IA utilises par la landing page.

## SEO / GEO

La page garde le contenu principal en HTML lisible, avec metadata Open Graph, canonical, sitemap, robots et schema.org `TravelAgency` + `TouristTrip`. Cette base aide autant les moteurs de recherche classiques que les moteurs generatifs a comprendre l'offre.

## Commandes

```bash
npm install
npm run dev
npm run build
```
