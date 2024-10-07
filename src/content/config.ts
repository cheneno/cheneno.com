import { z, defineCollection } from 'astro:content'

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    cover: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    sticky: z.number().default(0),
    createdAt: z.coerce
      .date()
      .or(z.string())
      .transform((v) => new Date(v)),
    updatedAt: z.coerce
      .date()
      .or(z.string())
      .optional()
      .transform((v) => (v ? new Date(v) : undefined)),
  }),
})

export const collections = {
  posts: postCollection,
}
