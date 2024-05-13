import { loadDataFromWaveformCSV, loadDataFromXYGraphCSV } from "./Data";
import type { Metadata } from "./Metadata";
import type { Run } from "./Run"

export default class AppState {
	public runs: Run[] = []

	static async loadFromFileList(fileList: FileList): Promise<AppState> {
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

		const state = new AppState

		for (const metadataFile of metadataFiles) {
			const metadata = JSON.parse(await metadataFile.text()) as Metadata

			const voltagesFile = voltagesFiles.find(file => file.name.endsWith(metadata.run_id + ".csv"))!
			const voltages = loadDataFromWaveformCSV(await voltagesFile.text())

			const voltagesFrequencyFile = voltagesFrequencyFiles.find(file => file.name.endsWith(metadata.run_id + ".csv"))!
			const voltagesFrequency = loadDataFromXYGraphCSV(await voltagesFrequencyFile.text())

			const phasesFrequencyFile = phaseFrequencyFiles.find(file => file.name.endsWith(metadata.run_id + ".csv"))!
			const phasesFrequency = loadDataFromXYGraphCSV(await phasesFrequencyFile.text())

			state.runs.push({
				id: metadata.run_id,
				metadata,
				voltages,
				voltagesFrequency,
				phasesFrequency
			})
		}

		console.log(state)

		return state
	}
}
