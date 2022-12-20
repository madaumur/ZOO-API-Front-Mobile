import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from '../../../environments/environment'
import { Specie } from '../models/specie.model'

@Injectable()
export class SpeciesService {
	constructor(private http: HttpClient) {}

	getSpecies(): Observable<Specie[]> {
		return this.http.get<Specie[]>(`${environment.apiUrl}/species`)
	}

	getSpecieById(specieId: string): Observable<Specie> {
		return this.http.get<Specie>(
			`${environment.apiUrl}/species/${specieId}`
		)
	}
}
