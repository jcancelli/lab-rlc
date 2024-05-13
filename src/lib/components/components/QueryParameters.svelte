<script lang="ts" context="module">
	export enum SortOrder {
		Ascending,
		Descending
	}

	export type SortField = keyof Entry
</script>

<script lang="ts">
	import QueryRangeInput from "./QueryRangeInput.svelte"
	import type Entry from "$lib/model/components/Entry"
	import { createEventDispatcher } from "svelte"

	export let minR: number
	export let maxR: number
	export let minL: number
	export let maxL: number
	export let minC: number
	export let maxC: number
	export let minResFreq: number
	export let maxResFreq: number
	export let minQ: number
	export let maxQ: number
	export let sortField: SortField
	export let sortOrder: SortOrder

	const dispatch = createEventDispatcher()
</script>

<div class="flex flex-wrap p-3 bg-white shadow-md">
	<QueryRangeInput title={"Resistor (ohm)"} bind:min={minR} bind:max={maxR} />
	<QueryRangeInput title={"Inductor (mH)"} bind:min={minL} bind:max={maxL} />
	<QueryRangeInput title={"Capacitor (nF)"} bind:min={minC} bind:max={maxC} />
	<QueryRangeInput title={"Resonance frequency (Hz)"} bind:min={minResFreq} bind:max={maxResFreq} />
	<QueryRangeInput title={"Quality Factor"} bind:min={minQ} bind:max={maxQ} />

	<!-- Sort controls -->
	<div class="w-fit flex flex-col p-2 gap-1">
		<div class="font-bold text-center">Sort by</div>
		<div class="flex gap-1">
			<select class="border border-gray-400 px-1 rounded-md" bind:value={sortField}>
				<option value="r">Resistor</option>
				<option value="l">Inductor</option>
				<option value="c">Capacitor</option>
				<option value="resonanceFrequency">Resonance frequency</option>
				<option value="qualityFactor" selected>Quality factor</option>
			</select>
			<select class="border border-gray-400 px-1 rounded-md" bind:value={sortOrder}>
				<option value={SortOrder.Ascending}>Ascending</option>
				<option value={SortOrder.Descending} selected>Descending</option>
			</select>
		</div>
	</div>

	<!-- Query button -->
	<div class="flex items-center justify-center p-2">
		<button
			on:click={() => dispatch("query")}
			class="border border-gray-400 p-2 rounded-md cursor-pointer"
		>
			Query
		</button>
	</div>
</div>
