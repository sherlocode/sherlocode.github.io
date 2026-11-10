/* Static paths shared by the English (/) and Italian (/it/) routes. */
import type { Lang } from './i18n';
import { getPublishedPosts, getQuizPosts, getChallenges, challengeSlug, collectTags, postSlug, tagSlug } from './utils';

export async function articlePaths(lang: Lang) {
  const posts = await getPublishedPosts(lang);
  return posts.map((post, i) => ({
    params: { slug: postSlug(post) },
    props: { post, newer: posts[i - 1], older: posts[i + 1] },
  }));
}

export async function quizPaths(lang: Lang) {
  const posts = await getQuizPosts(lang);
  return posts.map((post) => ({ params: { slug: postSlug(post) }, props: { post } }));
}

export async function tagPaths(lang: Lang) {
  const posts = await getPublishedPosts(lang);
  return collectTags(posts).map((tag) => ({
    params: { tag: tag.slug },
    props: { name: tag.name, posts: posts.filter((p) => p.data.tags.some((x) => tagSlug(x) === tag.slug)) },
  }));
}

export async function challengePaths(lang: Lang) {
  const challenges = await getChallenges(lang);
  return challenges.map((challenge) => ({ params: { slug: challengeSlug(challenge) }, props: { challenge } }));
}
