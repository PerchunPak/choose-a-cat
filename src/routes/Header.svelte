<script lang="ts">
  import { AppBar } from "@skeletonlabs/skeleton-svelte";
  import { CreditCard, LogIn, User } from "lucide-svelte";
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
  {#snippet lead()}
    <a href="/" class="type-title preset-tonal-surface-500 btn !type-scale-6"
      >Choose A Cat</a
    >
  {/snippet}
  {#snippet trail()}
    lox
  {/snippet}
</AppBar>
