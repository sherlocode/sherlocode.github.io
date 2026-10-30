import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Pages CMS may save empty fields as empty strings; treat them as unset.
const emptyToUndefined = (v: unknown) => (v === '' || v === null ? undefined : v);

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.preprocess(emptyToUndefined, z.coerce.date().optional()),
    heroImage: z.preprocess(emptyToUndefined, z.string().optional()),
    tags: z.preprocess((v) => (Array.isArray(v) ? v.filter(Boolean) : []), z.array(z.string())),
    draft: z.preprocess((v) => v === true, z.boolean()),
  }),
});

// Individual pages editable in Pages CMS (e.g. "About").
const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { blog, pages };
