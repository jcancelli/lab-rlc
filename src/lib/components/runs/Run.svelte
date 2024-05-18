<script lang="ts">
	import type { Run } from "$lib/model/runs/Run"
	import Graph from "../Graph.svelte"
	import Metadata from "./Metadata.svelte"

	export let run: Run

	const { metadata, voltages, voltageFrequency, phaseFrequency } = run

	let isExpanded = false
</script>

<div class="p-2 bg-white rounded-lg shadow-md">
	<div
		class="flex items-center justify-start gap-7 cursor-pointer"
		on:click={() => (isExpanded = !isExpanded)}
		role="presentation"
	>
		<div>{metadata.run_id}</div>
		<div>R {metadata.components.resistor_ohm}Ω</div>
		<div>L {metadata.components.inductor_mh}mH</div>
		<div>C {metadata.components.capacitor_nf}nF</div>
		<div>
			{typeof metadata.frequency === "number"
				? `${metadata.frequency}Hz`
				: `${metadata.frequency.start}Hz-${metadata.frequency.end}Hz`}
		</div>
		<div>{metadata.annotation}</div>
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
			<Metadata {metadata} />
		</div>
	{/if}
</div>
