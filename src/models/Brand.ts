import { Collection } from "mongodb";

import { getDb } from "@/lib/db";
import { Brand } from "@/types/brand";

export async function getBrandCollection(): Promise<
  Collection<Brand>
> {
  const db = await getDb();

  return db.collection<Brand>("brands");
}