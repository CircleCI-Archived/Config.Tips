import { z, defineCollection, reference } from "astro:content";

const seoDescription = z.string().min(100).max(160)

const configKindCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: seoDescription,
    body: z.string(),
    snippet: z.object({
      code: z.string(),
      lang: z.string(),
    }),
    website: z.string().url(),
    logo: z.string().url(),
  }),
});

const tipCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: seoDescription,
    snippet: z.string(),
    publishDate: z.string().transform((str) => new Date(str)).default(() => new Date().toDateString()),
    kind: reference("configKinds"),
  }),
});

export const collections = {
  configKinds: configKindCollection,
  tips: tipCollection,
}