import { model, Schema } from 'mongoose'
import { specieInterface } from '../interface/specie.interface'

const specieSchema = new Schema<specieInterface>({
	_id: { type: String, required: true },
	name: { type: String, required: true },
})

const specieModel = model<specieInterface>('specie', specieSchema)

export { specieModel, specieInterface }
