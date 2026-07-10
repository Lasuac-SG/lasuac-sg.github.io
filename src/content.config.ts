import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional()
  })
});

export const collections = {
  'blog': blogCollection,
};
