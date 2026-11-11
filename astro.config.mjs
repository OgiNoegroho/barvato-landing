import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const siteUrl = process.env.PUBLIC_SITE_URL || "http://localhost:4321";

export default defineConfig({
  site: siteUrl,
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
