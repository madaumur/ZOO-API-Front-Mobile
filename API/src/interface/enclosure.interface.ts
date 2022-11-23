import { Document } from 'mongoose'

interface enclosureInterface extends Document {
	_id: string
	name: string
	zone: object
	coordinates: string
	surface: number
}

export { enclosureInterface }