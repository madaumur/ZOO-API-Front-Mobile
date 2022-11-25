import { FilterQuery, QueryOptions } from "mongoose";
import { animalInterface } from "../interface/animal.interface";
import { animalModel } from "../model/animal.model";

async function findAnimalByID( args : FilterQuery<animalInterface>, option : QueryOptions = { lean: true }, ) : Promise<any>
{
	return animalModel.findById(args, option)
}