import { auth } from "$lib/auth.server"; // path to your auth file
import { svelteKitHandler } from "better-auth/svelte-kit";
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = ({ event, resolve }) => {
  return svelteKitHandler({ event, resolve, auth });
}
