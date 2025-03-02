<script lang="ts">
  import "../app.css";
  let { children } = $props();
</script>

<div class="grid grid-rows-[auto_1fr_auto]">
  <header
    class="bg-surface-950/45 border-b-surface-900 fixed top-0 z-10 flex w-full flex-col space-y-4 border-b-4 p-2 px-4 pr-4 backdrop-blur-md sm:pl-20 lg:pl-40"
  >
    (header)
  </header>
  <main
    class="h-fit min-h-[calc(100vh-56px)] px-4 pt-20 sm:px-10 md:px-20 lg:px-40"
  >
    {@render children()}
  </main>
</div>
