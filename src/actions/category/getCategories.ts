"use server";

import { getCategoryCollection } from "@/models/Category";
import { Category } from "@/types/category";

export async function getCategories(): Promise<Category[]> {
  const collection = await getCategoryCollection();

  const categories = await collection
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return categories.map((category) => ({
    ...category,
    _id: category._id.toString(),
  }));
}