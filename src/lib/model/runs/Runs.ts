import { loadDataFromWaveformCSV, loadDataFromXYGraphCSV } from "./Data";
import type { Metadata } from "./Metadata";
import type { Run } from "./Run"

export default async function loadRunsFromFileList(fileList: FileList): Promise<Run[]> {
	const files = Array.from(fileList);
	const metadataFiles = files.filter((file) => {
		return file.webkitRelativePath.split("/")[1] === "metadata"
	});
	const voltagesFiles = files.filter((file) => {
		return file.webkitRelativePath.split("/")[1] === "voltages"
	});
	const voltagesFrequencyFiles = files.filter((file) => {
		const filepath = file.webkitRelativePath.split("/").slice(1);
		return (
			filepath[0] === "frequency_analysis" &&
			filepath[1] === "voltage"
		);
	});
	const phaseFrequencyFiles = files.filter((file) => {
		const filepath = file.webkitRelativePath.split("/").slice(1);
		return (
			filepath[0] === "frequency_analysis" && filepath[1] === "phase"
		);
	});

	const runs: Run[] = []

	for (const metadataFile of metadataFiles) {
		const metadata = JSON.parse(await metadataFile.text()) as Metadata

		console.log("--------- Loading run:", metadata.run_id, "--------")

		const voltagesFile = voltagesFiles.find(file => file.name.endsWith(metadata.run_id + ".csv"))!
		console.log("Voltages file:", voltagesFile.webkitRelativePath)
		const voltagesCSV = await voltagesFile.text()
		console.log("File content:\n", voltagesCSV)
		const voltages = loadDataFromWaveformCSV(voltagesCSV)
		console.log("Voltages data:\n", voltages)

		const voltagesFrequencyFile = voltagesFrequencyFiles.find(file => file.name.endsWith(metadata.run_id + ".csv"))!
		const voltagesFrequency = loadDataFromXYGraphCSV(await voltagesFrequencyFile.text())

		const phasesFrequencyFile = phaseFrequencyFiles.find(file => file.name.endsWith(metadata.run_id + ".csv"))!
		const phasesFrequency = loadDataFromXYGraphCSV(await phasesFrequencyFile.text())

		runs.push({
			id: metadata.run_id,
			metadata,
			voltages,
			voltagesFrequency,
			phasesFrequency
		})
	}

	return runs
}
