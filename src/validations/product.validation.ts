import { z } from "zod";

export const productSchema = z.object({
  title: z
    .string()
    .min(3, "Product title must be at least 3 characters"),

  slug: z
    .string()
    .min(3, "Slug is required"),

  shortDescription: z
    .string()
    .min(10, "Short description is too short"),

  description: z
    .string()
    .min(20, "Description is too short"),

  brand: z.string().min(1, "Brand is required"),

  category: z.string().min(1, "Category is required"),

  thumbnail: z.string(),

  gallery: z.array(z.string()),

  price: z.number().min(0),

  discountPrice: z.number().optional(),

  costPrice: z.number().min(0),

  stock: z.number().min(0),

  lowStockAlert: z.number().min(0),

  sku: z.string().min(1),

  warranty: z.number().min(0),

  featured: z.boolean(),

  trending: z.boolean(),

  active: z.boolean(),

  draft: z.boolean(),

  sold: z.number(),

  rating: z.number(),

  reviewCount: z.number(),
});

export type ProductInput = z.infer<typeof productSchema>;