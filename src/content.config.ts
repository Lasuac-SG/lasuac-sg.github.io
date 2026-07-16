import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional()
  })
});

const momentsCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/moments"}),
    schema: z.object({
        date: z.coerce.date(),
    })
})

export const collections = {
  'blog': blogCollection,
  'moments': momentsCollection,
};
