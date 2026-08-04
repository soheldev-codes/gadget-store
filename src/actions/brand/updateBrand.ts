"use server";

import { ObjectId } from "mongodb";

import { getBrandCollection } from "@/models/Brand";
import {
  brandSchema,
  BrandInput,
} from "@/validations/brand.validation";

export async function updateBrand(
  id: string,
  data: BrandInput
) {
  const validatedData = brandSchema.parse(data);

  const collection = await getBrandCollection();

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
    throw new Error("Brand not found.");
  }

  return {
    success: true,
    message: "Brand updated successfully.",
  };
}