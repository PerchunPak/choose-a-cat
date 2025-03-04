<script lang="ts">
  import { Image } from "@unpic/svelte";
  import Keybinds from "./Keybinds.svelte";
  import type { image } from "$lib/server/db/schema";
  import { toast } from "svelte-sonner";

  const { data } = $props();

  let images: (typeof image)[] = $state(data.images);

  function onChose(variant: "left" | "right"): void {
    fetch("/api/choose", {
      method: "POST",
      body: JSON.stringify({
        variant,
        left: images[0].id,
        right: images[1].id,
      }),
    })
      .then(async (res) => {
        images = await res.json();
      })
      .catch((e) => toast.error(e as string));
    images = [];
  }
</script>

<Keybinds onLeft={() => onChose("left")} onRight={() => onChose("right")} />

<div class="grid max-h-screen grid-cols-2 space-x-4">
  {#each images as image}
    <div class="flex h-fit w-fit place-content-center rounded border p-4">
      <Image src={`/image/${image.id}`} alt="cat" layout="fullWidth" />
    </div>
  {/each}
  {#if images.length === 0}
    <div class="flex h-fit w-fit place-content-center rounded border p-4"></div>
    <div class="flex h-fit w-fit place-content-center rounded border p-4"></div>
  {/if}
</div>
