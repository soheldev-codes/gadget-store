"use server";

import { ObjectId } from "mongodb";

import { getProductCollection } from "@/models/Product";
import {
  productSchema,
  ProductInput,
} from "@/validations/product.validation";

export async function updateProduct(
  id: string,
  data: ProductInput
) {
  const validatedData = productSchema.parse(data);

  const productCollection = await getProductCollection();

  const result = await productCollection.updateOne(
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
    throw new Error("Product not found.");
  }

  return {
    success: true,
    message: "Product updated successfully.",
  };
}