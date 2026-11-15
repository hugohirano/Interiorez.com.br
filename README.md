# Interiorez.com.br
Site Interiorez.com.br

Site estático em [Astro](https://astro.build), em português (`/`) e inglês (`/en/`).

```sh
npm install
npm run dev      # servidor local em http://localhost:4321
npm run build    # gera o site em dist/
```

- Textos da página inicial: `src/themes/oficina/Home.astro`
- Projetos do portfólio: `src/lib/projects.ts` (fotos em `src/assets/projects/`)
- Artigos: `src/content/blog/`
- O endereço do site (`https://interiorez.com.br`) é definido em `astro.config.mjs`.

## Publicação

- Hospedado no GitHub Pages: cada push na `main` roda `.github/workflows/deploy.yml` e publica o site.
- Domínio próprio em `public/CNAME` (`interiorez.com.br`); DNS na Cloudflare (proxy ligado, SSL "Full (strict)").
- Sitemap: `/sitemap.xml` (gerado por `src/pages/sitemap.xml.ts`, aponta para o `sitemap-0.xml` do `@astrojs/sitemap`). O `robots.txt` aponta para ele.
