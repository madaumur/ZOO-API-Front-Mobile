import { Document } from 'mongoose'

interface eventInterface extends Document {
	_id: string
	type: /* ? */ string
	enclosure: object
	employee: object
	date: Date
	observations: string
}

export { eventInterface }
