// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Public URL of the site, used for canonical links, sitemap, RSS and LinkedIn previews.
// The GitHub Actions workflow sets SITE; this default is used for local builds.
const site = process.env.SITE ?? 'https://sherlocode.app';

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
