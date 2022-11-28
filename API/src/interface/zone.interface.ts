import { Document } from 'mongoose'

interface zoneInterface extends Document {
	_id: string
	name: string
}

export { zoneInterface }