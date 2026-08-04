"use server";

import { ObjectId } from "mongodb";

import { getCategoryCollection } from "@/models/Category";
import {
  categorySchema,
  CategoryInput,
} from "@/validations/category.validation";

export async function updateCategory(
  id: string,
  data: CategoryInput
) {
  const validatedData = categorySchema.parse(data);

  const collection = await getCategoryCollection();

  const result = await collection.updateOne(
    {
      _id: new ObjectId(id),
    },
    {
      $set: {
        ...validatedData,
        updatedAt: new Date(),
      },
    }
  );

  if (!result.matchedCount) {
    throw new Error("Category not found.");
  }

  return {
    success: true,
    message: "Category updated successfully.",
  };
}