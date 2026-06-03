// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import rehypeRaw from 'rehype-raw';

export default defineConfig({
  site: 'https://magnetic-ia.fr',
  redirects: {
    // Redirections 301 depuis les anciennes URLs WordPress
    '/comment-alfaprint-a-transforme-son-e-commerce-grace-a-odoo-google-ads-shopping-et-merchant-center/': '/blog/alfaprint-transformation-ecommerce/',
    '/mcp-vs-api-differences-avantages-inconvenients/': '/blog/mcp-vs-api-differences-cas-pratiques/',
    '/audit-strategique-positionnement/': '/blog/audit-strategique-positionnement/',
    '/10-automations-faciles-pour-les-tpe-a-realiser-en-priorite/': '/blog/10-automations-ia-tpe/',
    '/lintelligence-artificielle-une-opportunite-concrete-pour-les-pme-et-tpe/': '/blog/ia-opportunite-pme-tpe/',
    // Anciennes URLs sans trailing slash
    '/comment-alfaprint-a-transforme-son-e-commerce-grace-a-odoo-google-ads-shopping-et-merchant-center': '/blog/alfaprint-transformation-ecommerce/',
    '/mcp-vs-api-differences-avantages-inconvenients': '/blog/mcp-vs-api-differences-cas-pratiques/',
    '/audit-strategique-positionnement': '/blog/audit-strategique-positionnement/',
    '/10-automations-faciles-pour-les-tpe-a-realiser-en-priorite': '/blog/10-automations-ia-tpe/',
    '/lintelligence-artificielle-une-opportunite-concrete-pour-les-pme-et-tpe': '/blog/ia-opportunite-pme-tpe/',
  },
  markdown: {
    remarkRehype: {
      allowDangerousHtml: true,
    },
    rehypePlugins: [rehypeRaw],
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
