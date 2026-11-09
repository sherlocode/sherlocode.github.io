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
    // Links the English and Italian versions of the same article when their file names differ.
    translationKey: z.preprocess(emptyToUndefined, z.string().optional()),
    // Optional "Check your knowledge!" quiz shown at the end of the article.
    // `answer` is the number of the correct option, starting from 1.
    quiz: z.preprocess(
      (v) => (Array.isArray(v) ? v.filter((q) => q && q.question) : []),
      z.array(
        z
          .object({
            question: z.string(),
            options: z.preprocess(
              (v) => (Array.isArray(v) ? v.filter((o) => o !== '' && o != null).map(String) : []),
              z.array(z.string()).min(2, 'A quiz question needs at least 2 options'),
            ),
            answer: z.coerce.number().int().min(1),
            explanation: z.preprocess(emptyToUndefined, z.string().optional()),
          })
          .refine((q) => q.answer <= q.options.length, {
            message: '`answer` must be the number of one of the options (1, 2, 3…)',
            path: ['answer'],
          }),
      ),
    ),
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
