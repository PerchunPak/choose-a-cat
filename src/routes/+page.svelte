<script lang="ts">
  import { Image } from "@unpic/svelte";
  import Keybinds from "./Keybinds.svelte";

  const url = "https://cataas.com/cat";
  let reloads = $state(0);

  function onevent() {
    reloads += 1;
  }
</script>

<Keybinds onReload={onevent} onLeft={onevent} onRight={onevent} />

{#snippet img(src: string, alt: string)}
  <div class="flex h-fit w-fit place-content-center rounded border p-4">
    <Image {src} {alt} layout="fullWidth" />
  </div>
{/snippet}

<div class="grid max-h-screen grid-cols-2 space-x-4">
  {@render img(url + "?".repeat(reloads), "cat1")}
  {@render img(url + "?".repeat(reloads + 1), "cat1")}
</div>
