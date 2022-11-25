import { Date, Document } from 'mongoose'
import { specieInterface } from './specie.interface'

interface animalInterface extends Document {
	_id: string
	name: string
	specie: object
	birth_date?: Date
	death_date?: Date
	sex: string /* M ou F */
	observations: string
	position: number /* 0 (dedans), 1 (dehors), 2 (clinique) et 3 (prêt) */
}

export { animalInterface }
