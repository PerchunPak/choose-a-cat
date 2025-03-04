import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { db } from "$lib/server/db";
import * as schemas from "$lib/server/db/schema";
import { auth } from "$lib/auth.server";
import { getTwoRandomImages } from "$lib";

interface RequestData {
  variant: "left" | "right";
  left: string;
  right: string;
}

export const POST: RequestHandler = async ({ request }) => {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) return error(401, "Unauthorized");

  const content = (await request.json()) as RequestData;
  await db.insert(schemas.comparison).values({
    user: session.user.id,
    a: content.left,
    b: content.right,
    result: content.variant === "left",
  });

  return json(await getTwoRandomImages(session.user.id));
};
