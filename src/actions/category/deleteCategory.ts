"use server";

import { ObjectId } from "mongodb";

import { getCategoryCollection } from "@/models/Category";

export async function deleteCategory(id: string) {
  const collection = await getCategoryCollection();

  const result = await collection.deleteOne({
    _id: new ObjectId(id),
  });

  if (!result.deletedCount) {
    throw new Error("Category not found.");
  }

  return {
    success: true,
    message: "Category deleted successfully.",
  };
}