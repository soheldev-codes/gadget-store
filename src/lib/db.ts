import { Db, MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.DATABASE_NAME;

if (!uri) {
  throw new Error("MONGODB_URI is not defined.");
}

if (!dbName) {
  throw new Error("DATABASE_NAME is not defined.");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db: Db | null = null;

export async function getDb(): Promise<Db> {
  if (db) return db;

  await client.connect();

  db = client.db(dbName);

  console.log("✅ MongoDB Connected Successfully");

  return db;
}