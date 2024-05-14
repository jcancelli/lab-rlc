export type Data = Point[][]

export type Point = {
	x: number
	y: number
}

export function loadDataFromWaveformCSV(csv: string): Data {
	csv = csv.trim() // remove leading and trailing \r\n
	csv = csv.substring(0, csv.length - 5) // removes weird trailing ";;;;"
	const table = csv.split("\r\n").map(row => row.split(";"))
	const nPlots = table[0].length - 1
	console.log("Plots detected:", nPlots)
	console.log(table)
	const data: Data = []
	for (const row of table) {
		// get only seconds from the timestamp
		const x = parseFloat(row[0].split(":").slice(-1)[0].replace(",", "."))
		const plots: Point[] = []
		for (let plotIndex = 0, columnIndex = 1; plotIndex < nPlots; plotIndex++, columnIndex++) {
			const plot = {
				x,
				y: parseFloat(row[columnIndex])
			}
			plots.push(plot)
			if (Number.isNaN(plot.x) || Number.isNaN(plot.y)) {
				console.log("nan plot", plot)
			}
		}
		data.push(plots)
	}
	if (data.length < 10) {
		console.log(csv)
	}
	return data
}

export function loadDataFromXYGraphCSV(csv: string): Data {
	const table = csv.trimStart().split("\r\n").map(row => row.split(";"))
	const nPlots = table[0].length
	const data: Data = new Array(nPlots).fill(0).map(() => [])

	for (const row of table) {
		for (let x = 0, y = 1, plotIndex = 0; plotIndex < nPlots; x += 2, y += 2, plotIndex++) {
			data[plotIndex].push({
				x: parseFloat(row[x]),
				y: parseFloat(row[y])
			})
		}
	}

	return data
}
