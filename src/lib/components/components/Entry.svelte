<script lang="ts">
	import type Entry from "$lib/model/components/Entry"

	export let entry: Entry
</script>

<div class="p-2 flex gap-3">
	<div>{entry.r}Ω</div>
	<div>{entry.l}mH</div>
	<div>{entry.c}nF</div>
	<div>{entry.resonanceFrequency}Hz</div>
	<div>{entry.qualityFactor}</div>
</div>
