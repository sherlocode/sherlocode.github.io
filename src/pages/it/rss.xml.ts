import type { APIContext } from 'astro';
import { rssFeed } from '../../rss';

export const GET = (context: APIContext) => rssFeed(context, 'it');
