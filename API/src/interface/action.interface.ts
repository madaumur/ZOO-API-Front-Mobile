import { Document } from 'mongoose'

interface actionInterface extends Document {
	_id: string
	name: string
	description: string
	creator: object
	enclosure: object
	priority: number /* 0 (basse), 1 (moyenne) et 2 (haute) */
	date: Date
}

export { actionInterface }
