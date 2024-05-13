<script lang="ts">
	import { getContext } from "svelte";
	import AppState from "../model/AppState";
	import type { Writable } from "svelte/store";

	const state = getContext<Writable<AppState>>("state");

	let files: FileList;

	async function onInputChange() {
		$state = await AppState.loadFromFileList(files);
	}
</script>

<header class="p-2">
	<input
		type="file"
		bind:files
		on:change={onInputChange}
		webkitdirectory
		multiple
	/>
</header>
