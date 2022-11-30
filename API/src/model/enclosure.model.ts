import { model, Schema } from 'mongoose'
import { EnclosureInterface } from '../interface/enclosure.interface'

const EnclosureSchema = new Schema<EnclosureInterface>(
	{
		_id: {
			type: String,
			/*unique: true,*/ required: [true, 'id is required'],
		},
		name: { type: String, required: [true, 'name is required'] },
		zone: {
			type: String,
			ref: 'zone',
			required: [true, 'zone is required'],
		},
		coordinates: { type: String, required: false, default: 'unknown' },
		surface: { type: Number, required: false },
	},
	{ versionKey: false, timestamps: true }
)

const EnclosureModel = model<EnclosureInterface>('enclosure', EnclosureSchema)

export { EnclosureModel, EnclosureInterface }
