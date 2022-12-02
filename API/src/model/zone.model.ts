import { model, Schema } from 'mongoose'
import { ZoneInterface } from '../interface/zone.interface'

const ZoneSchema = new Schema<ZoneInterface>(
	{
		_id: {
			type: String,
			/*unique: true,*/ required: [true, 'id is required'],
		},
		name: { type: String, required: [true, 'name is required'] },
	},
	{ versionKey: false, timestamps: true }
)

const ZoneModel = model<ZoneInterface>('zone', ZoneSchema)

export { ZoneModel, ZoneInterface }
