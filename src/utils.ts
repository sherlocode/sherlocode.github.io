import { getCollection, type CollectionEntry } from 'astro:content';
import { LANG_META, isLang, localizePath, DEFAULT_LANG, type Lang } from './i18n';

export type Post = CollectionEntry<'blog'>;

/*
 * Articles live in src/content/blog/<lang>/<file>.md, so an entry id looks like "it/azure-tables".
 * The two language versions of an article are linked by the same file name,
 * or by the same `translationKey` when the file names differ.
 */

/** Language of an article, from its folder. */
export const postLang = (post: Post): Lang => {
  const first = post.id.split('/')[0];
  return isLang(first) ? first : DEFAULT_LANG;
};

/** URL slug of an article (file name without the language folder). */
export const postSlug = (post: Post): string => post.id.split('/').slice(1).join('/') || post.id;

/** Key shared by the translations of the same article. */
export const postKey = (post: Post): string => post.data.translationKey ?? postSlug(post);

export const postUrl = (post: Post): string => localizePath(postLang(post), `/blog/${postSlug(post)}/`);
export const quizUrl = (post: Post): string => localizePath(postLang(post), `/quiz/${postSlug(post)}/`);

async function allPublished(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Published articles in one language (drafts are visible locally with `npm run dev`), newest first. */
export async function getPublishedPosts(lang: Lang): Promise<Post[]> {
  return (await allPublished()).filter((p) => postLang(p) === lang);
}

/** The same article in the other language, if it exists. */
export async function getTranslation(post: Post, lang: Lang): Promise<Post | undefined> {
  const key = postKey(post);
  return (await getPublishedPosts(lang)).find((p) => postKey(p) === key);
}

/** Published articles in one language that have a "Check your knowledge!" quiz. */
export async function getQuizPosts(lang: Lang): Promise<Post[]> {
  return (await getPublishedPosts(lang)).filter((p) => p.data.quiz.length > 0);
}

/** localStorage key where a quiz result is saved. Shared by both languages of the same article. */
export const quizStorageKey = (post: Post) => `sherlocode:quiz:${postKey(post)}`;

export function tagSlug(tag: string): string {
  return tag
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export const tagUrl = (lang: Lang, tag: string) => localizePath(lang, `/tag/${tagSlug(tag)}/`);

/** All tags with article counts, sorted by frequency. */
export function collectTags(posts: Post[]): { name: string; slug: string; count: number }[] {
  const map = new Map<string, { name: string; slug: string; count: number }>();
  for (const post of posts) {
    for (const name of post.data.tags) {
      const slug = tagSlug(name);
      const entry = map.get(slug) ?? { name, slug, count: 0 };
      entry.count++;
      map.set(slug, entry);
    }
  }
  return [...map.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function readingMinutes(body: string | undefined): number {
  const words = (body ?? '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(LANG_META[lang].locale, { day: 'numeric', month: 'long', year: 'numeric' });
}

/* ---------- Architecture challenges ---------- */

export type Challenge = CollectionEntry<'challenges'>;

export const challengeLang = (c: Challenge): Lang => {
  const first = c.id.split('/')[0];
  return isLang(first) ? first : DEFAULT_LANG;
};
/** URL slug of a challenge; the same file name links its two language versions. */
export const challengeSlug = (c: Challenge): string => c.id.split('/').slice(1).join('/') || c.id;
export const challengeUrl = (c: Challenge): string =>
  localizePath(challengeLang(c), `/quiz/architecture/${challengeSlug(c)}/`);
/** Key shared by the two language versions of a challenge (file name, or translationKey). */
export const challengeKey = (c: Challenge): string => c.data.translationKey ?? challengeSlug(c);
/** localStorage key of a challenge result, shared by both languages. */
export const challengeStorageKey = (c: Challenge) => `sherlocode:arch:${challengeKey(c)}`;
/** Number of answers checked in a challenge (boxes or cards). */
export const challengeSize = (c: Challenge) => (c.data.type === 'diagram' ? c.data.slots.length : c.data.cards.length);

/** Published challenges in one language, in their configured order. */
export async function getChallenges(lang: Lang): Promise<Challenge[]> {
  const all = await getCollection('challenges', ({ data }) => import.meta.env.DEV || !data.draft);
  return all
    .filter((c) => challengeLang(c) === lang)
    .sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}
