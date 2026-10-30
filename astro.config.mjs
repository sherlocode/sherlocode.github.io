// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// L'indirizzo pubblico del sito. In GitHub Actions viene impostato in automatico
// (https://<tuo-username>.github.io). Se un giorno userai un dominio tuo,
// imposta la variabile SITE nel workflow oppure scrivilo qui.
const site = process.env.SITE ?? 'https://tuo-username.github.io';

export default defineConfig({
  site,
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
