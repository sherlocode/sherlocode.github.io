import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE_TITLE } from './consts';
import { getPublishedPosts, postUrl } from './utils';
import { LANG_META, t, type Lang } from './i18n';

export async function rssFeed(context: APIContext, lang: Lang) {
  const posts = await getPublishedPosts(lang);
  return rss({
    title: lang === 'en' ? SITE_TITLE : `${SITE_TITLE} (${LANG_META[lang].name})`,
    description: t(lang).siteDescription,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: post.data.tags,
      link: postUrl(post),
    })),
    customData: `<language>${LANG_META[lang].rss}</language>`,
  });
}
