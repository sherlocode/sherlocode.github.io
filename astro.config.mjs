// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// L'indirizzo pubblico del sito. In GitHub Actions viene impostato in automatico
// (https://<tuo-username>.github.io). Se un giorno userai un dominio tuo,
// Set the SITE variable in the workflow or provide it here.
const site = process.env.SITE ?? 'https://tuo-username.github.io';

export default defineConfig({
  site,
  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-US', it: 'it-IT' } },
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
