import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './projects';

export type Article = CollectionEntry<'blog'>;

export async function articles(lang: Lang) {
  const all = await getCollection('blog', ({ data }) => data.lang === lang);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function counterpart(article: Article) {
  const all = await getCollection('blog');
  return all.find((a) => a.data.translation === article.data.translation && a.data.lang !== article.data.lang);
}

export const readingMinutes = (body = '') => Math.max(1, Math.round(body.trim().split(/\s+/).length / 200));

export const formatDate = (date: Date, lang: Lang) =>
  date.toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
