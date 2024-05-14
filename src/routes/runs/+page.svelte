<script lang="ts">
	import type { Run } from "$lib/model/runs/Run"
	import RunWidget from "$lib/components/runs/Run.svelte"
	import loadRunsFromFileList from "$lib/model/runs/Runs"

	let files: FileList
	let runs: Run[] = []

	async function onFilesSelected() {
		runs = await loadRunsFromFileList(files)
	}
</script>

<div class="bg-white p-3 shadow-md">
	<input type="file" bind:files on:change={onFilesSelected} multiple webkitdirectory />
</div>

<div class="flex flex-col p-3 gap-3">
	{#each runs as run (run.id)}
		<RunWidget {run} />
	{/each}
</div>
