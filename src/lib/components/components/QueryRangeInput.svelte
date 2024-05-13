<script lang="ts">
	export let title: string
	export let min: number
	export let max: number
</script>

<div class="w-fit flex flex-col p-2 gap-1">
	<div class="font-bold text-center">{title}</div>
	<div>
		<label>
			Min
			<input type="number" bind:value={min} class="border border-gray-400 w-24 px-1 rounded-md" />
		</label>
		<label>
			Max
			<input type="number" bind:value={max} class="border border-gray-400 w-24 px-1 rounded-md" />
		</label>
	</div>
</div>
