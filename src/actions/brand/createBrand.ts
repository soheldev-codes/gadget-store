"use server";

import { getBrandCollection } from "@/models/Brand";
import {
  brandSchema,
  BrandInput,
} from "@/validations/brand.validation";

export async function createBrand(
  data: BrandInput
) {
  const validatedData = brandSchema.parse(data);

  const collection = await getBrandCollection();

  const exists = await collection.findOne({
    slug: validatedData.slug,
  });

  if (exists) {
    throw new Error("Brand slug already exists.");
  }

  const result = await collection.insertOne({
    ...validatedData,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return {
    success: true,
    insertedId: result.insertedId.toString(),
    message: "Brand created successfully.",
  };
}