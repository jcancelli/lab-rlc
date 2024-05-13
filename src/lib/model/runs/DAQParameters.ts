export type DAQParameters = {
	trigger_level: number
	trigger_slope: "rising" | "falling"
	sample_rate: number
	n_samples: number
}
