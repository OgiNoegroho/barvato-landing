# Barvato — Public Marketing Landing Page (`barvato-landing`)

Static public marketing website for **Barvato**, built with **Astro 5**, **TypeScript**, and **Tailwind CSS v4**.

## 1. Tech Stack & Design System

- **Framework**: Astro 5 (Static Site Generation)
- **Language**: TypeScript 5.7 (`strict` mode)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) using Barvato's canonical `@theme` color tokens (`charcoal`, `ivory`, `stone`, `copper`, `forest`, `amber`) and typography (`Instrument Serif` + `DM Sans`)

## 2. Environment Configuration

Copy `.env.example` to `.env` to customize URLs and CTA destinations:

```ini
PUBLIC_SITE_URL=http://localhost:4321
PUBLIC_APP_LOGIN_URL=http://localhost:3000
PUBLIC_TRIAL_CTA_URL=#hubungi-kami
PUBLIC_CONTACT_URL=mailto:halo@barvato.id?subject=Informasi%20Produk%20Barvato
```

All CTA destinations and SEO defaults are centralized in [`src/config/site.ts`](./src/config/site.ts).

## 3. Commands

```powershell
# Install dependencies
npm install

# Run local development server (http://localhost:4321)
npm run dev

# Run TypeScript and Astro diagnostics
npm run typecheck

# Build static production output into dist/
npm run build

# Preview production build
npm run preview
```
