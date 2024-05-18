export default function qualityFactor(r: number, l: number, c: number): number {
	return (1 / r) * Math.sqrt(l / c)
}
