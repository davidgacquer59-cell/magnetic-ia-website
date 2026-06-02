// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://magnetic-ia.fr',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://magnetic-ia.fr/',
        'https://magnetic-ia.fr/blog/',
        'https://magnetic-ia.fr/contact/',
        'https://magnetic-ia.fr/mentions-legales/',
        'https://magnetic-ia.fr/cgv/',
        'https://magnetic-ia.fr/accompagnement/',
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
