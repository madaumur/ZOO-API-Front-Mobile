import { Document } from 'mongoose'

interface ZoneInterface extends Document {
	_id: string
	name: string
}

export { ZoneInterface }