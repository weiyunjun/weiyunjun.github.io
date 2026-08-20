import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/posts',
    generateId: ({ entry, data }) => String(
      data.slug ?? entry.replace(/\.(?:md|mdx)$/, '').toLowerCase().replace(/\s+/g, '-'),
    ),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.coerce.string().optional(),
      pubDate: z.coerce.date(),
      modDate: z.coerce.date().optional(),
      categories: z.array(z.string()),
      draft: z.boolean().default(false).optional(),
      description: z.string().optional(),
      customData: z.string().optional(),
      banner: image()
        .refine(img => Math.max(img.width, img.height) <= 4096, { message: 'Width and height of the banner must less than 4096 pixels' })
        .optional(),
      author: z.string().optional(),
      commentsUrl: z.string().optional(),
      source: z.optional(z.object({ url: z.string(), title: z.string() })),
      enclosure: z.optional(z.object({ url: z.string(), length: z.number(), type: z.string() })),
      pin: z.boolean().default(false).optional(),
    }),
})

const spec = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/spec' }),
})

export const collections = {
  posts,
  spec,
}
