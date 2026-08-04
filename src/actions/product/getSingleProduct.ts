"use server";

import { getProductCollection } from "@/models/Product";
import { Product } from "@/types/product";

export async function getSingleProduct(
  slug: string
): Promise<Product | null> {
  const productCollection = await getProductCollection();

  const product = await productCollection.findOne({
    slug,
  });

  if (!product) {
    return null;
  }

  return {
    ...product,
    _id: product._id.toString(),
  };
}