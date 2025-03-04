import type { PageServerLoad } from "./$types";
import { getTwoRandomImages } from "$lib";
import { auth } from "$lib/auth.server";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ request }) => {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) return error(401, "Unauthorized");

  return { images: await getTwoRandomImages(session.user.id) };
};
