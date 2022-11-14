import { Document } from 'mongoose'

interface specieInterface extends Document {
	_id: string
	name: string
}

export { specieInterface }
