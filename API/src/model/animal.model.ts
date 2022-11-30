import { model, Schema } from 'mongoose'
import { AnimalInterface } from '../interface/animal.interface'

const AnimalSchema = new Schema<AnimalInterface>(
	{
		_id: { type: String, /*unique: true,*/ required: [true, 'id is required'] },
		name: { type: String, required: [true, 'name is required'] },
		specie: {
			type: String,
			ref: 'specie',
			required: [true, 'specie is required'],
		},
		birth_date: { type: Date, required: false },
		death_date: { type: Date, required: false },
		sex: {
			type: String,
			required: [true, 'sex is required and must be F, M or unknown'],
			enum: ['F', 'M', 'Unknown'],
			default: 'Unknown',
		},
		observations: { type: String, required: false, default: 'none' },
		position: {
			type: Number,
			required: [true, 'position is required and must 0, 1, 2 or 3'],
			enum: [0, 1, 2, 3],
			default: 0,
		},
	},
	{ versionKey: false, timestamps: true }
)

const AnimalModel = model<AnimalInterface>('animal', AnimalSchema)

export { AnimalModel, AnimalInterface }
