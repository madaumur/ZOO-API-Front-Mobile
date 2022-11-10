import logger from '../utils/logger'
import { animalModel, animalInterface } from '../model/animal'

/* @TODO
export async function createAnimal(data: animalInterface) {
	try {
		const result = await animalModel.create(data)
		return result
	} catch (e) {
		logger.error(e)
	}
}
*/

export async function findAnimal(value: string) {
	try {
		const result = await animalModel.findById(value)
		return result
	} catch (e) {
		logger.error(e)
	}
}

export async function listAnimals() {
	try {
		const animals: animalInterface[] = await animalModel.find()
		return animals
	} catch (e) {
		logger.error(e)
	}
}
