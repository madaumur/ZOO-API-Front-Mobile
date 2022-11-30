import { model, Schema } from 'mongoose'
import { SpecieInterface } from '../interface/specie.interface'

const SpecieSchema = new Schema<SpecieInterface>(
	{
		_id: {
			type: String,
			/*unique: true,*/ required: [true, 'id is required'],
		},
		name: { type: String, required: [true, 'name is required'] },
		sociable: { type: Boolean, required: true, default: null },
		observations: { type: String, required: false, default: 'none' },
		dangerous: { type: Boolean, required: true, default: null },
		enclosure: {
			type: String,
			ref: 'enclosure',
			required: [true, 'enclosure is required'],
		},
	},
	{ versionKey: false, timestamps: true }
)

const SpecieModel = model<SpecieInterface>('specie', SpecieSchema)

export { SpecieModel, SpecieInterface }
