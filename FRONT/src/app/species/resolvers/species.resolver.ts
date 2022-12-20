import {
	Resolve,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
} from '@angular/router'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'

import { Specie } from '../models/specie.model'
import { SpeciesService } from '../services/species.service'

@Injectable()
export class SpeciesResolver implements Resolve<Specie[]> {
	constructor(private speciesService: SpeciesService) {}

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<Specie[]> {
		return this.speciesService.getSpecies()
	}
}
