import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(160),
    summary: z.string().max(400),
    date: z.coerce.date(),
    category: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    breaking: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const categories = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { news, categories };
