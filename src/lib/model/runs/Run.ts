import type { Data } from "./Data"
import type { Metadata } from "./Metadata"

export type Run = {
	id: string
	timestamp: Date
	metadata: Metadata
	voltages: Data
	voltageFrequency: Data
	phaseFrequency: Data
}
