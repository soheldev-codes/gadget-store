"use server";

import { getBrandCollection } from "@/models/Brand";
import { Brand } from "@/types/brand";

export async function getBrands(): Promise<Brand[]> {
  const collection = await getBrandCollection();

  const brands = await collection
    .find({})
    .sort({
      createdAt: -1,
    })
    .toArray();

  return brands.map((brand) => ({
    ...brand,
    _id: brand._id.toString(),
  }));
}