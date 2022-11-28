import { model, Schema } from 'mongoose'
import { zoneInterface } from '../interface/zone.interface'

const zoneSchema = new Schema<zoneInterface>(
	{
		_id: {
			type: String,
			/*unique: true,*/ required: [true, 'id is required'],
		},
		name: { type: String, required: [true, 'name is required'] },
	},
	{ versionKey: false, timestamps: true }
)

const zoneModel = model<zoneInterface>('zone', zoneSchema)

export { zoneModel, zoneInterface }
