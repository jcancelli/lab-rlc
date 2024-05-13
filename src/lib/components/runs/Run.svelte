<script lang="ts">
	import type { Run } from "../model/Run";
	import { VisXYContainer, VisLine } from "@unovis/svelte";

	export let run: Run;

	const { metadata, voltages, voltagesFrequency, phasesFrequency } = run;

	let isExpanded = false;

	const x = [
		(d: Data) => 
	]
</script>

<div class="p-2" on:click={() => (isExpanded = !isExpanded)}>
	{#if !isExpanded}
		<div
			class="flex items-center justify-start gap-3 shadow-md cursor-pointer"
		>
			<div>{metadata.run_id}</div>
			<div>R: {metadata.components.resistor_ohm}Ω</div>
			<div>L: {metadata.components.inductor_mh}mH</div>
			<div>C: {metadata.components.capacitor_nf}</div>
			<div>{metadata.is_sweep ? "Sweep" : "No sweep"}</div>
			<div>
				{metadata.is_sweep
					? `${metadata.frequency.start}Hz-${metadata.frequency.end}Hz`
					: `${metadata.frequency}Hz`}
			</div>
		</div>
	{:else}
		<div>
			<VisXYContainer data={voltages}></VisXYContainer>
		</div>
	{/if}
</div>
