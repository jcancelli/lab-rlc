import type { Components } from "./Components"
import type { DAQChannel } from "./DAQChannel"
import type { DAQParameters } from "./DAQParameters"

export type Metadata = {
	run_id: string
	annotation: string
	is_sweep: boolean
	frequency:
		| number
		| {
				start: number
				end: number
		  }
	components: Components
	daq_parameters: DAQParameters
	daq_channels: DAQChannel[]
}
