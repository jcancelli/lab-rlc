const PI2 = Math.PI * 2

export default function resonanceFrequency(l: number, c: number): number {
	return resonancePulse(l, c) / PI2
}

// omega
export function resonancePulse(l: number, c: number): number {
	return Math.sqrt(1 / (l * c))
}
