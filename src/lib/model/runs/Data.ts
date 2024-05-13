export type Data = Point[][]

export type Point = {
	x: number
	y: number
}

export function loadDataFromWaveformCSV(csv: string): Data {
	const table = csv.trimStart().split("\r\n").map(row => row.split(";"))
	const nPlots = table[0].length - 1
	const data: Data = new Array(nPlots).fill(0).map(() => [])

	for (const row of table) {
		// get only seconds from the timestamp
		const x = parseFloat(row[0].split(":").slice(-1)[0].replace(",", "."))
		for (let plotIndex = 0, columnIndex = 1; plotIndex < nPlots; plotIndex++, columnIndex++) {
			data[plotIndex].push({
				x,
				y: parseFloat(row[columnIndex])
			})
		}
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
