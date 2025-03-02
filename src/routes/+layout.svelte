<script lang="ts">
  import "../app.css";
  import Header from "./Header.svelte";

  let { children } = $props();
</script>

<div class="grid grid-rows-[auto_1fr_auto]">
  <Header />
  <main
    class="h-fit min-h-[calc(100vh-56px)] px-4 pt-20 sm:px-10 md:px-20 lg:px-40"
  >
    {@render children()}
  </main>
</div>
