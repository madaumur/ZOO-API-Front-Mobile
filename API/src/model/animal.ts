import { model, Schema, Document } from 'mongoose'

interface IAnimal extends Document {
	_id: string
	name: string
	specie: string
	birth_date: string
	death_date: string
	sex: string
	observations: string
	position: string
}

const animalSchema = new Schema({
	_id: {
		type: String,

	},
	name: {
		type: String,
	},
	specie: {
		type: String,
	},
	birth_date: {
		type: String,
	},
	death_date: {
		type: String,
	},
	sex: {
		type: String,
	},
	observations: {
		type: String,
	},
	position: {
		type: String,
	},
})

const animalModel = model<IAnimal>('animal', animalSchema)

export { animalModel, IAnimal }
