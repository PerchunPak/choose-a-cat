import { db } from "$lib/server/db";
import { image } from "$lib/server/db/schema";
import { sql } from "drizzle-orm";

export async function getRandomImages(amount: number) {
  return await db
    .select()
    .from(image)
    .orderBy(sql`random()`)
    .limit(amount);
}
