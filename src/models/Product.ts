import { Collection } from "mongodb";

import { getDb } from "@/lib/db";
import { Product } from "@/types/product";

export async function getProductCollection(): Promise<
  Collection<Product>
> {
  const db = await getDb();

  return db.collection<Product>("products");
}