import {
	getTimestampFromWaveformCSV,
	loadDataFromWaveformCSV,
	loadDataFromXYGraphCSV,
	type Data
} from "./Data"
import type { Metadata } from "./Metadata"
import type { Run } from "./Run"

export default async function loadRunsFromFileList(fileList: FileList): Promise<Run[]> {
	const files = filterFiles(fileList)
	const runs: Run[] = []
	const runsMetadatas = await parseMetadata(files.metadata)

	for (const metadata of runsMetadatas) {
		const { run_id } = metadata

		const voltagesFile = filterFileByRunID(run_id, files.voltages)
		if (!voltagesFile) {
			throw new Error(`Could not find voltages file for run ${run_id}`)
		}
		const voltagesCSV = await voltagesFile.text()
		const voltages = loadDataFromWaveformCSV(voltagesCSV)
		const timestamp = getTimestampFromWaveformCSV(voltagesCSV)

		const voltageFrequencyFile = filterFileByRunID(run_id, files.voltageFrequency)
		if (!voltageFrequencyFile) {
			throw new Error(`Could not find voltage-frequency file for run ${run_id}`)
		}
		const voltageFrequency = loadDataFromXYGraphCSV(await voltageFrequencyFile.text())

		const phaseFrequencyFile = filterFileByRunID(run_id, files.phaseFrequency)
		if (!phaseFrequencyFile) {
			throw new Error(`Could not find phase-frequency file for run ${run_id}`)
		}
		const phaseFrequency = loadDataFromXYGraphCSV(await phaseFrequencyFile.text())

		// set plots labels
		metadata.daq_channels.forEach((channel, index) => {
			voltages[index].label = channel.logic_name
			voltageFrequency[index].label = channel.logic_name
			phaseFrequency[index].label = channel.logic_name
		})

		runs.push({
			id: run_id,
			timestamp,
			metadata,
			voltages,
			voltageFrequency,
			phaseFrequency
		})
	}

	return runs.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
}

function filterFiles(fileList: FileList): {
	metadata: File[]
	voltages: File[]
	voltageFrequency: File[]
	phaseFrequency: File[]
} {
	const files = Array.from(fileList)

	const metadataFiles = files.filter(file => {
		return file.webkitRelativePath.split("/")[1] === "metadata"
	})
	const voltagesFiles = files.filter(file => {
		return file.webkitRelativePath.split("/")[1] === "voltages"
	})
	const voltageFrequencyFiles = files.filter(file => {
		const filepath = file.webkitRelativePath.split("/").slice(1)
		return filepath[0] === "frequency_analysis" && filepath[1] === "voltage"
	})
	const phaseFrequencyFiles = files.filter(file => {
		const filepath = file.webkitRelativePath.split("/").slice(1)
		return filepath[0] === "frequency_analysis" && filepath[1] === "phase"
	})

	return {
		metadata: metadataFiles,
		voltages: voltagesFiles,
		voltageFrequency: voltageFrequencyFiles,
		phaseFrequency: phaseFrequencyFiles
	}
}

async function parseMetadata(files: File[]): Promise<Metadata[]> {
	const parseFile = async (file: File) => {
		return file.text().then((text: string) => {
			return JSON.parse(text) as Metadata
		})
	}
	return Promise.all(files.map(parseFile))
}

function filterFileByRunID(runID: string, files: File[]): File | null {
	return (
		files.find((file: File) => {
			return file.name.endsWith(`${runID}.csv`)
		}) ?? null
	)
}
