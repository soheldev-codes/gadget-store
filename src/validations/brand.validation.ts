import { z } from "zod";

export const brandSchema = z.object({
  name: z.string().min(2),

  slug: z.string().min(2),

  description: z.string().optional(),

  logo: z.string().optional(),

  featured: z.boolean(),

  active: z.boolean(),
});

export type BrandInput = z.infer<
  typeof brandSchema
>;