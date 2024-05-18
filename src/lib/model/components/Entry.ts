export default class Entry {
	r: number
	l: number
	c: number
	qualityFactor: number
	resonanceFrequency: number

	constructor(r: number, l: number, c: number, qualityFactor: number, resonanceFrequency: number) {
		this.r = r
		this.l = l
		this.c = c
		this.qualityFactor = qualityFactor
		this.resonanceFrequency = resonanceFrequency
	}
}
