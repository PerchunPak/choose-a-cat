<script>
  import { goto } from "$app/navigation";
  import { authClient } from "$lib/auth";
  import { toast } from "svelte-sonner";

  let email = $state("");
  let username = $state("");
  let password = $state("");

  const session = authClient.useSession();

  session.subscribe((v) => {
    if (v.data) goto("/");
  });
</script>

<div
  class="bg-surface-900 m-auto grid max-w-fit grid-cols-1 space-y-2 rounded p-10"
>
  <h1 class="text-4xl">Register</h1>
  <form>
    <label>
      Email
      <input class="input" name="email" bind:value={email} />
    </label>
    <label>
      username
      <input class="input" name="username" bind:value={username} />
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
    <a href="/login" class="font-xs anchor">I already have an account</a>
    <button
      type="button"
      class="btn preset-filled"
      onclick={async () => {
        const { data, error } = await authClient.signUp.email({
          name: username,
          email,
          password,
        });
        if (error) toast.error(error.message || "unknown error");
        goto("/");
      }}>Login</button
    >
  </form>
</div>
