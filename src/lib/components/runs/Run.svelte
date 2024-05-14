<script lang="ts">
	import type { Data, Point } from "$lib/model/runs/Data"
	import type { Run } from "../model/Run"
	import { VisXYContainer, VisLine } from "@unovis/svelte"

	export let run: Run

	const { metadata, voltages, voltagesFrequency, phasesFrequency } = run

	let isExpanded = false

	const x = [
		(d: Point[]) => d[0].x,
		(d: Point[]) => d[1].x,
		(d: Point[]) => d[2].x,
		(d: Point[]) => d[3].x
	]
	const y = [
		(d: Point[]) => d[0].y,
		(d: Point[]) => d[1].y,
		(d: Point[]) => d[2].y,
		(d: Point[]) => d[3].y
	]
</script>

<div
	class="p-2 bg-white rounded-lg shadow-md"
	on:click={() => (isExpanded = !isExpanded)}
	role="presentation"
>
	{#if !isExpanded}
		<div class="flex items-center justify-start gap-7 cursor-pointer">
			<div>{metadata.run_id}</div>
			<div>R {metadata.components.resistor_ohm}Ω</div>
			<div>L {metadata.components.inductor_mh}mH</div>
			<div>C {metadata.components.capacitor_nf}nF</div>
			<div>
				{metadata.is_sweep
					? `${metadata.frequency.start}Hz-${metadata.frequency.end}Hz`
					: `${metadata.frequency}Hz`}
			</div>
			<div>{metadata.annotation}</div>
		</div>
	{:else}
		<div>
			<VisXYContainer data={voltages}>
				<VisLine {x} {y} />
			</VisXYContainer>
		</div>
	{/if}
</div>
