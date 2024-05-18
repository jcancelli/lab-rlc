import type { Plot, Point } from "../Plot"

export type Data = Plot[]

export function loadDataFromWaveformCSV(csv: string): Data {
	const table = cleanCSV(csv)
		.split("\r\n")
		.map(row => row.split(";"))

	const nPlots = table[0].length - 1

	const data: Data = []
	for (let i = 0; i < nPlots; i++) {
		data.push({
			data: [],
			label: ""
		})
	}

	const firstX = labviewTimestampToPicoseconds(table[0][0])

	for (const row of table) {
		// get only seconds from the timestamp
		const x = labviewTimestampToPicoseconds(row[0]) - firstX

		for (let plotIndex = 0, columnIndex = 1; plotIndex < nPlots; plotIndex++, columnIndex++) {
			const plot = {
				x,
				y: Number(row[columnIndex])
			}
			data[plotIndex].data.push(plot)
		}
	}

	return data
}

export function getTimestampFromWaveformCSV(csv: string): Date {
	csv = cleanCSV(csv)
	const firstSemicolonIndex = csv.indexOf(";")
	return labviewTimestampToDate(csv.slice(0, firstSemicolonIndex))
}

function labviewTimestampToPicoseconds(timestamp: string): number {
	const [, , secondsStr] = timestamp.split(":")
	return Number(secondsStr.replace(".", ""))
}

function labviewTimestampToDate(timestamp: string): Date {
	const [date, time] = timestamp.split("  ")
	const [months, days, years] = date.split("/").map(Number)
	const [hours, minutes, seconds] = time.replace(",", ".").split(":").map(Number)
	return new Date(years, months - 1, days, hours, minutes, seconds)
}

export function loadDataFromXYGraphCSV(csv: string): Data {
	const table = cleanCSV(csv)
		.split("\r\n")
		.map(row => row.split(";"))
	const nPlots = table[0].length / 2

	const data: Data = []
	for (let i = 0; i < nPlots; i++) {
		data.push({
			data: [],
			label: ""
		})
	}

	for (const row of table) {
		for (let x = 0, y = 1, plotIndex = 0; plotIndex < nPlots; x += 2, y += 2, plotIndex++) {
			data[plotIndex].data.push({
				x: Number(row[x]),
				y: Number(row[y])
			})
		}
	}

	console.log(data)

	return data
}

function cleanCSV(csv: string): string {
	csv = csv
		.trim() // remove leading and trailing \r\n
		.replaceAll(",", ".")
	return csv.substring(0, csv.length - 5) // removes weird trailing ";;;;"
}
