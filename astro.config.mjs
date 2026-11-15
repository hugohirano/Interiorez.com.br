import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://interiorez.com.br',
  integrations: [sitemap()],
  vite: { resolve: { alias: { '@theme': fileURLToPath(new URL('./src/themes/oficina', import.meta.url)) } } },
});
