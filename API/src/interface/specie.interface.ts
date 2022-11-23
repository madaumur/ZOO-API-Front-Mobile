import { Document } from 'mongoose'

interface specieInterface extends Document {
	_id: string
	name: string
	sociable: boolean
	observations: string
	dangerous: boolean
	enclosure: object
}

export { specieInterface }
