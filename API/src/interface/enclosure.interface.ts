import { Document } from 'mongoose'

interface EnclosureInterface extends Document {
	_id: string
	name: string
	zone: object
	coordinates: string
	surface: number
}

export { EnclosureInterface }