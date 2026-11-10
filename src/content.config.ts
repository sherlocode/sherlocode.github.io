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

// Architecture challenges: interactive, cross-article exercises (src/content/challenges/<lang>/<id>.yml).
// - "diagram": drag the right technology into the empty boxes of an architecture.
// - "sort": drag each use case under the technology that fits it.
// Drops empty entries the CMS may save (blank strings, or objects whose fields are all blank).
const isBlank = (x: unknown): boolean =>
  x === '' || x == null || (typeof x === 'object' && !Array.isArray(x) && Object.values(x as object).every(isBlank));
const nonEmptyList = <T extends z.ZodTypeAny>(item: T) =>
  z.preprocess((v) => (Array.isArray(v) ? v.filter((x) => !isBlank(x)) : []), z.array(item));

const challenges = defineCollection({
  loader: glob({ base: './src/content/challenges', pattern: '**/*.{yml,yaml}' }),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      type: z.enum(['diagram', 'sort']),
      /** Lower numbers come first in the Quiz section. */
      order: z.coerce.number().default(100),
      draft: z.preprocess((v) => v === true, z.boolean()),
      /** Links the English and Italian versions when their file names differ. */
      translationKey: z.preprocess(emptyToUndefined, z.string().optional()),
      /** Article keys (file names) to read before trying the challenge. */
      related: nonEmptyList(z.string()),
      /** The technologies you can drag (diagram) or the columns to sort into (sort). */
      technologies: nonEmptyList(
        z.object({ name: z.string(), hint: z.preprocess(emptyToUndefined, z.string().optional()) }),
      ),
      /** diagram: the fixed component in the middle of the architecture. */
      center: z.preprocess(
        (v) => (isBlank(v) ? undefined : v),
        z.object({ label: z.string(), detail: z.preprocess(emptyToUndefined, z.string().optional()) }).optional(),
      ),
      /** diagram: empty boxes around the center, on the left (in) or on the right (out). */
      slots: nonEmptyList(
        z.object({
          side: z.enum(['in', 'out']),
          edge: z.string(),
          external: z.preprocess(emptyToUndefined, z.string().optional()),
          answer: z.string(),
          explanation: z.string(),
        }),
      ),
      /** sort: the use cases to place under the right technology. */
      cards: nonEmptyList(z.object({ text: z.string(), answer: z.string(), explanation: z.string() })),
    })
    .superRefine((c, ctx) => {
      const names = new Set(c.technologies.map((t) => t.name));
      if (c.technologies.length < 2) ctx.addIssue({ code: 'custom', message: 'A challenge needs at least 2 technologies' });
      const check = (answer: string, path: (string | number)[]) => {
        if (!names.has(answer)) ctx.addIssue({ code: 'custom', path, message: `"${answer}" is not one of the technologies` });
      };
      if (c.type === 'diagram') {
        if (!c.center) ctx.addIssue({ code: 'custom', path: ['center'], message: 'A diagram challenge needs a center component' });
        if (c.slots.length === 0) ctx.addIssue({ code: 'custom', path: ['slots'], message: 'A diagram challenge needs at least one slot' });
        c.slots.forEach((s, i) => check(s.answer, ['slots', i, 'answer']));
      } else {
        if (c.cards.length < 2) ctx.addIssue({ code: 'custom', path: ['cards'], message: 'A sort challenge needs at least 2 cards' });
        c.cards.forEach((s, i) => check(s.answer, ['cards', i, 'answer']));
      }
    }),
});

export const collections = { blog, pages, challenges };
