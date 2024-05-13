<script lang="ts">
	import type { PageData } from "./$types"
	import Entry from "$lib/model/components/Entry"
	import qualityFactor from "$lib/function/QualityFactor"
	import resonanceFrequency from "$lib/function/ResonanceFrequency"
	import QueryParameters, {
		SortOrder,
		type SortField
	} from "$lib/components/components/QueryParameters.svelte"
	import { writable } from "svelte/store"

	export let data: PageData

	let minR = 9999999,
		maxR = 0,
		minL = 9999999,
		maxL = 0,
		minC = 9999999,
		maxC = 0,
		minResFreq = 9999999,
		maxResFreq = 0,
		minQ = 9999999,
		maxQ = 0,
		sortField: SortField,
		sortOrder: SortOrder

	const allEntries: Entry[] = []
	let queriedEntries: Entry[] = []
	const entriesPromise = writable(computeEntries().then(filterAndSort).then(syncEntriesVariable))

	async function computeEntries(): Promise<Entry[]> {
		for (const R of data.resistors) {
			for (const l of data.inductors) {
				const L = l * 0.001
				for (const c of data.capacitors) {
					const C = c * 0.000000001
					const entry = new Entry(R, l, c, qualityFactor(R, L, C), resonanceFrequency(L, C))
					allEntries.push(entry)
					minR = Math.min(minR, entry.r)
					maxR = Math.max(maxR, entry.r)
					minL = Math.min(minL, entry.l)
					maxL = Math.max(maxL, entry.l)
					minC = Math.min(minC, entry.c)
					maxC = Math.max(maxC, entry.c)
					minResFreq = Math.min(minResFreq, entry.resonanceFrequency)
					maxResFreq = Math.max(maxResFreq, entry.resonanceFrequency)
					minQ = Math.min(minQ, entry.qualityFactor)
					maxQ = Math.max(maxQ, entry.qualityFactor)
				}
			}
		}

		return allEntries
	}

	async function filterAndSort(entries: Entry[]): Promise<Entry[]> {
		let sortFunc: (a: Entry, b: Entry) => number
		if (sortOrder === SortOrder.Ascending) {
			sortFunc = (a, b) => {
				return a[sortField] - b[sortField]
			}
		} else {
			sortFunc = (a, b) => {
				return b[sortField] - a[sortField]
			}
		}

		return entries
			.filter(({ r, l, c, resonanceFrequency, qualityFactor }) => {
				return (
					r > minR &&
					r < maxR &&
					l > minL &&
					l < maxL &&
					c > minC &&
					c < maxC &&
					resonanceFrequency > minResFreq &&
					resonanceFrequency < maxResFreq &&
					qualityFactor > minQ &&
					qualityFactor < maxQ
				)
			})
			.sort(sortFunc)
	}

	async function syncEntriesVariable(computedEntries: Entry[]): Promise<Entry[]> {
		queriedEntries = computedEntries
		return computedEntries
	}

	function onQuery() {
		$entriesPromise = filterAndSort(allEntries).then(syncEntriesVariable)
	}

	function formatNum(n: number, min: number, max: number): string {
		return n.toLocaleString(undefined, {
			minimumFractionDigits: min,
			maximumFractionDigits: max
		})
	}
</script>

<QueryParameters
	bind:minR
	bind:maxR
	bind:minL
	bind:maxL
	bind:minC
	bind:maxC
	bind:minResFreq
	bind:maxResFreq
	bind:minQ
	bind:maxQ
	bind:sortField
	bind:sortOrder
	on:query={onQuery}
/>
<div class="w-fit bg-white p-4 mt-2 shadow-md mx-auto rounded-lg">
	<table class="text-right">
		<tr>
			<th>Resistor (ohm)</th>
			<th>Inductor (mH)</th>
			<th>Capacitor (nF)</th>
			<th>Resonance Frequency (Hz)</th>
			<th>Quality Factor</th>
		</tr>
		{#await $entriesPromise}
			<tr>
				<td colspan="5" class="text-center p-10 font-semibold"> Calculating... </td>
			</tr>
		{:then computedEntries}
			{#each computedEntries as { r, l, c, qualityFactor, resonanceFrequency }}
				<tr>
					<td>
						<span class="">{formatNum(r, 0, 2)}</span>
					</td>
					<td>
						<span class="">{formatNum(l, 0, 2)}</span>
					</td>
					<td>
						<span class="">{formatNum(c, 0, 2)}</span>
					</td>
					<td>
						<span class="">{formatNum(resonanceFrequency, 0, 0)}</span>
					</td>
					<td>
						<span>{formatNum(qualityFactor, 2, 2)}</span>
					</td>
				</tr>
			{:else}
				<tr>
					<td colspan="5" class="text-center p-10 font-semibold"> No results </td>
				</tr>
			{/each}
		{/await}
	</table>
</div>

<style>
	th,
	td {
		padding-right: 3rem;
	}
</style>
