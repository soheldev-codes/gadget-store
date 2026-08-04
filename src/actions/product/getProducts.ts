"use server";

import { getProductCollection } from "@/models/Product";
import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  const productCollection = await getProductCollection();

  const products = await productCollection
    .find({})
    .sort({
      createdAt: -1,
    })
    .toArray();

  return products.map((product) => ({
    ...product,
    _id: product._id.toString(),
  }));
}