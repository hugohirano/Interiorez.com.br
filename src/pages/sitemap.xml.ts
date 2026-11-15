// Gera /sitemap.xml apontando para o sitemap criado pelo @astrojs/sitemap
// (que publica /sitemap-index.xml e /sitemap-0.xml com todas as páginas).
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const root = new URL(import.meta.env.BASE_URL, site);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${new URL('sitemap-0.xml', root).href}</loc></sitemap>
</sitemapindex>
`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
