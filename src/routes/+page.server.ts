import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { image } from '$lib/server/db/schema';
import { sql } from 'drizzle-orm';
import { getRandomImages } from '$lib';

export const load: PageServerLoad = async () => {
  return { images: await getRandomImages(2) }
};
