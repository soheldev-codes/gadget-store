"use server";

import { getCategoryCollection } from "@/models/Category";
import {
  categorySchema,
  CategoryInput,
} from "@/validations/category.validation";

export async function createCategory(
  data: CategoryInput
) {
  const validatedData = categorySchema.parse(data);

  const collection = await getCategoryCollection();

  const exists = await collection.findOne({
    slug: validatedData.slug,
  });

  if (exists) {
    throw new Error("Category slug already exists.");
  }

  const result = await collection.insertOne({
    ...validatedData,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return {
    success: true,
    insertedId: result.insertedId.toString(),
    message: "Category created successfully.",
  };
}