import { Document } from 'mongoose'
import { specieInterface } from '../model/specie.model'

interface animalInterface extends Document {
	_id: string
	name: string
	specie: specieInterface
	birth_date: Date
	death_date: Date
	sex: string
	observations: string
	position: string
}

export { animalInterface }
