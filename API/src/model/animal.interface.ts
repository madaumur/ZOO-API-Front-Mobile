import { Document } from 'mongoose'

interface animalInterface extends Document {
	_id: String
	name: String
	specie: String
	birth_date: Date
	death_date: Date
	sex: String
	observations: String
	position: String
}

export { animalInterface }
