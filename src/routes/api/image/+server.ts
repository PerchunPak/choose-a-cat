import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { db } from "$lib/server/db";
import * as schemas from "$lib/server/db/schema";
import { env } from "$env/dynamic/private";
import { auth } from "$lib/auth.server";
import phash from "sharp-phash";
import dist from "sharp-phash/distance";

export const POST: RequestHandler = async ({ request }) => {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) return error(401, "Unauthorized");

  const content = await request.bytes();
  const hash = await phash(content);

  const allImages = await db.select().from(schemas.image);
  for (const image of allImages) {
    if (dist(hash, image.hash) < 5) {
      return error(400, `Duplicate with ${image.id}`);
    }
  }

  const id = crypto.randomUUID();
  await Bun.write(`${env.DATA_DIR}/${id}.img`, content);
  await db.insert(schemas.image).values({
    id,
    uploadedBy: session.user.id,
    hash,
  });
  return new Response("ok");
};
