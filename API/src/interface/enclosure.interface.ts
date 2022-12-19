import { Document } from 'mongoose'

export default interface EnclosureInterface extends Document {
	_id: string
	name: string
	zone: object
	coordinates: string
	surface: number
}
