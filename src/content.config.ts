import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// To publish through Soro, replace this loader with one that reads its delivery
// source; pages depend only on the schema below.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['pt', 'en']),
    slug: z.string(),
    translation: z.string(),
    cover: z.string(),
    coverAlt: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
