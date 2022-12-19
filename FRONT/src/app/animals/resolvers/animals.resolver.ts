import {
	Resolve,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
} from '@angular/router'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'

import { Animal } from '../models/animal.model'
import { AnimalsService } from '../services/animals.service'

@Injectable()
export class AnimalsResolver implements Resolve<Animal[]> {
	constructor(private animalsService: AnimalsService) {}

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<Animal[]> {
		return this.animalsService.getAnimals()
	}
}
