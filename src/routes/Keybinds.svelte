<script lang="ts">
  type Callback = () => void;

  let {
    onRight,
    onLeft,
  }: {
    onRight: Callback;
    onLeft: Callback;
  } = $props();

  function handleKeyPress(event: KeyboardEvent): void {
    switch (event.key) {
      case "ArrowRight":
        onRight();
        event.preventDefault();
        break;

      case "ArrowLeft":
        onLeft();
        event.preventDefault();
        break;
    }
  }

  function onkeydown(event: KeyboardEvent) {
    if (event.repeat) return;
    handleKeyPress(event);
  }
</script>

<svelte:window {onkeydown} />
