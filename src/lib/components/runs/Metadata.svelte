<script lang="ts">
	import type { Metadata } from "$lib/model/runs/Metadata"

	export let metadata: Metadata
</script>

<div class="flex gap-8">
	<div class="flex flex-col">
		<div class="font-bold">ID:</div>
		<div>{metadata.run_id}</div>
	</div>
	<div class="flex flex-col">
		<div class="font-bold">Annotation:</div>
		<div>{metadata.annotation}</div>
	</div>
</div>
