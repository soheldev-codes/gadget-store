import { Collection } from "mongodb";

import { getDb } from "@/lib/db";
import { Category } from "@/types/category";

export async function getCategoryCollection(): Promise<
  Collection<Category>
> {
  const db = await getDb();

  return db.collection<Category>("categories");
}