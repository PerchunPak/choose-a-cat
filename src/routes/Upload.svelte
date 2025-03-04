<script lang="ts">
  import { Upload } from "lucide-svelte";
  import { toast } from "svelte-sonner";

  let files: FileList | undefined = $state();

  $effect(() => {
    if (!files) return;

    let success = false;
    for (const file of files) {
      fetch("/api/image", {
        method: "POST",
        body: file,
      })
        .then(async (res) => {
          const result = await res.text();
          if (result !== "ok") toast.error(result);
          else success = true;
        })
        .catch((e) => toast.error(e as string));
    }

    // do not duplicate toasts on success
    if (success) toast.success("Uploaded!");
  });
</script>

<div class="">
  <label for="file-input" class="btn-icon preset-outlined-surface-500">
    <Upload size={20} />
  </label>
  <input
    id="file-input"
    accept="image/png, image/jpeg"
    bind:files
    multiple
    type="file"
    class="hidden"
  />
</div>
