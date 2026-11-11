export interface NavLink {
  label: string;
  href: string;
}

const rawSiteUrl = import.meta.env.PUBLIC_SITE_URL || "http://localhost:4321";
const normalizedSiteUrl = rawSiteUrl.replace(/\/+$/, "");

const rawAppLoginUrl = import.meta.env.PUBLIC_APP_LOGIN_URL || "http://localhost:3000";

/**
 * Centralized site configuration and CTA destinations.
 *
 * NOTE ON CTA DESTINATIONS:
 * - `loginUrl` points directly to the verified operational Barvato web app login page.
 * - `trialCtaUrl` defaults to `#hubungi-kami` (or can be configured via `PUBLIC_TRIAL_CTA_URL`
 *   to point to the registration endpoint or operational login page once public self-serve
 *   registration is exposed on the backend).
 * - `contactUrl` is configurable via `PUBLIC_CONTACT_URL` (defaults to a clean mailto inquiry link).
 */
export const siteConfig = {
  name: "Barvato",
  tagline: "Aplikasi Manajemen Barbershop",
  title: "Barvato — Urus Barbershop Nggak Harus Ribet",
  description:
    "Kelola booking, antrean walk-in, kasir POS, jadwal staff, dan laporan keuangan barbershop dari satu tempat. Jadi kamu bisa lebih fokus mengembangkan bisnismu.",
  locale: "id_ID",
  lang: "id",
  siteUrl: normalizedSiteUrl,
  ogImage: "/images/operations-dashboard-hidpi.png",
  cta: {
    loginLabel: "Masuk",
    loginUrl: rawAppLoginUrl,
    trialLabel: "Coba Gratis 14 Hari",
    trialUrl: import.meta.env.PUBLIC_TRIAL_CTA_URL || "#hubungi-kami",
    secondaryHeroLabel: "Lihat Cara Kerjanya",
    secondaryHeroUrl: "#cara-kerja",
    contactLabel: "Hubungi Kami",
    contactUrl:
      import.meta.env.PUBLIC_CONTACT_URL ||
      "mailto:halo@barvato.id?subject=Coba%20Gratis%2014%20Hari%20Barvato",
  },
  navLinks: [
    { label: "Produk", href: "#produk" },
    { label: "Fitur", href: "#fitur" },
    { label: "Cara Kerja", href: "#cara-kerja" },
    { label: "Harga", href: "#harga" },
    { label: "FAQ", href: "#faq" },
  ] satisfies NavLink[],
} as const;
