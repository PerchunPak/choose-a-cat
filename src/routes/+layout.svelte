<script lang="ts">
  import "../app.css";
  import { Toaster } from "svelte-sonner";
  import Header from "./Header.svelte";

  let { children } = $props();
</script>

<Toaster richColors />
<div class="grid grid-rows-[auto_1fr_auto]">
  <Header />
  <main
    class="h-fit min-h-[calc(100vh-56px)] px-4 pt-20 sm:px-10 md:px-20 lg:px-40"
  >
    {@render children()}
  </main>
</div>
