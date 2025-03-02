<script lang="ts">
  import { AppBar } from "@skeletonlabs/skeleton-svelte";
  import { LogIn, Upload, LogOut } from "lucide-svelte";
  import { authClient } from "$lib/auth";

  const session = authClient.useSession();
</script>

<AppBar
  classes="fixed top-0 z-10 p-2 sm:pl-20 lg:pl-40 pr-4 border-b-4 border-b-surface-900"
  padding="px-4"
  background="backdrop-blur-md bg-surface-950/45"
  leadSpaceX=""
  leadClasses="items-center"
  trailSpaceX=""
  trailClasses="hidden lg:flex min-h-full items-center gap-2"
>
  {#snippet lead()}{/snippet}
  {#snippet trail()}
    {#if $session.data}
      <p>{$session.data.user.name}</p>
      <a href="/upload" class="btn-icon preset-outlined-surface-500">
        <Upload size={20} />
      </a>
      <button
        type="button"
        class="btn-icon preset-outlined-success-500"
        onclick={() => authClient.signOut()}
      >
        <LogOut size={20} />
      </button>
    {:else}
      <a href="/sign-up" class="btn-icon preset-outlined-surface-500">
        <LogIn size={20} />
      </a>
    {/if}
  {/snippet}
</AppBar>
