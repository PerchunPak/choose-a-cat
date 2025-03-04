import { db } from "$lib/server/db";
import { comparison, image } from "$lib/server/db/schema";
import { and, eq, notInArray, or, sql } from "drizzle-orm";

export async function getTwoRandomImages(userId: string) {
  return await db
    .select()
    .from(image)
    .orderBy(sql`random()`)
    .limit(2)
    .where(
      notInArray(
        image.id,
        db
          .select({ id: image.id })
          .from(image)
          .innerJoin(
            comparison,
            and(
              or(eq(image.id, comparison.a), eq(image.id, comparison.b)),
              eq(comparison.user, userId)
            )
          )
      )
    );
}
