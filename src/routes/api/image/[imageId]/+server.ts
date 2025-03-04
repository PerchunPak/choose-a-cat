import { error } from "@sveltejs/kit";
import type { RequestHandler } from "../$types";
import { db } from "$lib/server/db";
import * as schemas from "$lib/server/db/schema";

export const GET: RequestHandler = async ({}) => {
  const result = await db.select().from(schemas.image);
  console.log(result);
  return new Response("ok");
};
