export class Animal {
	_id?: string
	name?: string
	specie?: string
	birth_date?: Date
	death_date?: Date
	sex?: string /* M,  F, unknown */
	observations?: string
	position?: number /* 0 (inside), 1 (outside), 2 (clinic) or 3 (loan) */
}
