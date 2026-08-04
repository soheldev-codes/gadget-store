"use server";

import { getProductCollection } from "@/models/Product";
import {
  productSchema,
  ProductInput,
} from "@/validations/product.validation";

export async function createProduct(data: ProductInput) {
  // Validate Input
  const validatedData = productSchema.parse(data);

  const productCollection = await getProductCollection();

  // Check Duplicate Slug
  const existingProduct = await productCollection.findOne({
    slug: validatedData.slug,
  });

  if (existingProduct) {
    throw new Error("Product slug already exists.");
  }

  // Insert Product
  const result = await productCollection.insertOne({
    ...validatedData,
    sold: 0,
    rating: 0,
    reviewCount: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return {
    success: true,
    insertedId: result.insertedId.toString(),
    message: "Product created successfully.",
  };
}