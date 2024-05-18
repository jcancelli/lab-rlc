<script lang="ts">
	import qualityFactor from "$lib/function/QualityFactor"
	import resonanceFrequency from "$lib/function/ResonanceFrequency"
	import type { Metadata } from "$lib/model/runs/Metadata"

	export let metadata: Metadata
	let { frequency, components, daq_parameters, daq_channels } = metadata

	function formatNum(n: number, min: number, max: number): string {
		return n.toLocaleString(undefined, {
			minimumFractionDigits: min,
			maximumFractionDigits: max,
			useGrouping: false
		})
	}
</script>

<div class="grid grid-cols-8 gap-5 cursor-pointer" on:click role="heading">
	<div class="flex flex-col">
		<div class="font-bold">ID:</div>
		<div>{metadata.run_id}</div>
	</div>
	<div class="flex flex-col">
		<div class="font-bold">Annotation:</div>
		<div>{metadata.annotation}</div>
	</div>
	<div class="flex flex-col">
		<div class="font-bold">Resistor:</div>
		<div>{components.resistor_ohm} Ω</div>
	</div>
	<div class="flex flex-col">
		<div class="font-bold">Inductor:</div>
		<div>{components.inductor_mh} mH</div>
	</div>
	<div class="flex flex-col">
		<div class="font-bold">Capacitor:</div>
		<div>{components.capacitor_nf} nF</div>
	</div>
	<div class="flex flex-col">
		<div class="font-bold">Frequency:</div>
		<div>
			{typeof frequency === "number"
				? `${frequency} Hz`
				: `${frequency.start} Hz - ${frequency.end} Hz`}
		</div>
	</div>
	<div class="flex flex-col">
		<div class="font-bold">Quality factor:</div>
		<div>
			{formatNum(
				qualityFactor(
					components.resistor_ohm,
					components.inductor_mh * 0.001,
					components.capacitor_nf * 0.000000001
				),
				3,
				3
			)}
		</div>
	</div>
	<div class="flex flex-col">
		<div class="font-bold">Resonance frequency:</div>
		<div>
			{formatNum(
				resonanceFrequency(components.inductor_mh * 0.001, components.capacitor_nf * 0.000000001),
				1,
				1
			)}
		</div>
	</div>
</div>
