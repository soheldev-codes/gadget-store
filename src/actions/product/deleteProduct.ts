"use server";

import { ObjectId } from "mongodb";

import { getProductCollection } from "@/models/Product";

export async function deleteProduct(id: string) {
  const productCollection = await getProductCollection();

  const result = await productCollection.deleteOne({
    _id: new ObjectId(id),
  });

  if (!result.deletedCount) {
    throw new Error("Product not found.");
  }

  return {
    success: true,
    message: "Product deleted successfully.",
  };
}