<script lang="ts">
	import Chart, { type ChartConfiguration } from "chart.js/auto"
	import { onMount } from "svelte"
	import type { Data } from "$lib/model/runs/Data"

	export let data: Data

	let canvas: HTMLCanvasElement

	const lineColors = ["orange", "#FF000077", "#00FF0077", "#0000FF77"]

	const config: ChartConfiguration = {
		type: "line",
		data: {
			datasets: data.map((plot, index) => {
				const color = lineColors[index % lineColors.length]
				return {
					data: plot.data,
					label: plot.label,
					borderColor: color,
					backgroundColor: color
				}
			})
		},
		options: {
			responsive: true,
			scales: {
				x: {
					type: "linear",
					beginAtZero: true,
					min: data[0].data[0].x,
					max: data[0].data[data[0].data.length - 1].x
				}
			},
			color: "#FF0000",
			backgroundColor: "#FF0000",
			elements: {
				line: {
					borderWidth: 1
				},
				point: {
					radius: 1
				}
			}
		}
	}

	onMount(() => {
		new Chart(canvas, config)
	})
</script>

<canvas bind:this={canvas} class="bg-slate-200" />
