"use server";

import { ObjectId } from "mongodb";

import { getBrandCollection } from "@/models/Brand";

export async function deleteBrand(id: string) {
  const collection = await getBrandCollection();

  const result = await collection.deleteOne({
    _id: new ObjectId(id),
  });

  if (!result.deletedCount) {
    throw new Error("Brand not found.");
  }

  return {
    success: true,
    message: "Brand deleted successfully.",
  };
}