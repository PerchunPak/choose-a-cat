<script>
  import { authClient } from "$lib/auth";
  import { goto } from "$app/navigation";
  import { toast } from "svelte-sonner";

  let email = $state("");
  let password = $state("");

  const session = authClient.useSession();

  session.subscribe((v) => {
    if (v.data) goto("/");
  });
</script>

<div
  class="bg-surface-900 m-auto grid max-w-fit grid-cols-1 space-y-2 rounded p-10"
>
  <form>
    <label>
      Email
      <input class="input" name="email" bind:value={email} />
    </label>
    <label>
      Password
      <input
        type="password"
        name="password"
        class="input"
        bind:value={password}
      />
    </label>
    <a href="/sign-up" class="font-xs anchor">I don't have an account yet</a>
    <button
      type="button"
      class="btn preset-filled"
      onclick={async () => {
        const { data, error } = await authClient.signIn.email({
          email,
          password,
        });
        if (error) toast.error(error.message || "unknown error");
        goto("/");
      }}>Login</button
    >
  </form>
</div>
