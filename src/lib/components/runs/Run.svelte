<script lang="ts">
	import type { Run } from "$lib/model/runs/Run"
	import Graph from "../Graph.svelte"
	import Metadata from "./Metadata.svelte"

	export let run: Run

	const { metadata, voltages, voltageFrequency, phaseFrequency } = run

	let isExpanded = false
</script>

<div class="p-2 bg-white rounded-lg shadow-md">
	<div class="px-4">
		<Metadata {metadata} on:click={() => (isExpanded = !isExpanded)} />
	</div>
	{#if isExpanded}
		<div class="p-2 flex flex-col gap-8">
			<div class="flex">
				<div class="w-1/3">
					<Graph data={run.voltages} />
				</div>
				<div class="w-1/3">
					<Graph data={run.voltageFrequency} />
				</div>
				<div class="w-1/3">
					<Graph data={run.phaseFrequency} />
				</div>
			</div>
		</div>
	{/if}
</div>
