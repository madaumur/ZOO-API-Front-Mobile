import { Document } from 'mongoose'

interface SpecieInterface extends Document {
	_id: string
	name: string
	sociable: boolean
	observations: string
	dangerous: boolean
	enclosure: object
}

export { SpecieInterface }
