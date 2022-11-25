import { model, Schema } from 'mongoose'
import { animalInterface } from '../interface/animal.interface'

const animalSchema = new Schema<animalInterface>(
	{
		_id: { type: String, required: true },
		name: { type: String, required: true },
		specie: { type: Schema.Types.ObjectId, ref: 'specie', required: true },
		birth_date: { type: Date, required: false },
		death_date: { type: Date, required: false },
		sex: {
			type: String,
			required: true,
			enum: ['F', 'M', 'Unknown'],
			default: 'Unknown',
		},
		observations: { type: String, required: false, default: 'none' },
		position: {
			type: Number,
			required: true,
			enum: [0, 1, 2, 3],
			default: 0,
		},
	},
	{ versionKey: undefined }
)
/*
enum postion {
	inside = 0,
	outside = 1,
	clinic = 2,
	loan = 3,
}
*/
const animalModel = model<animalInterface>('animal', animalSchema)

export { animalModel, animalInterface }
