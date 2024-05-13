import type { Data } from "./Data"
import type { Metadata } from "./Metadata"

export type Run = {
	id: string
	metadata: Metadata
	voltages: Data
	voltagesFrequency: Data
	phasesFrequency: Data
}
