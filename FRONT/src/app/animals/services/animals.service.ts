import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from '../../../environments/environment'
import { Animal } from '../models/animal.model'

@Injectable()
export class AnimalsService {
	constructor(private http: HttpClient) {}

	getAnimals(): Observable<Animal[]> {
		return this.http.get<Animal[]>(`${environment.apiUrl}/animals`)
	}

	getAnimalById(animalId: string): Observable<Animal> {
		console.log(`${environment.apiUrl}/animals/${animalId}`)
		return this.http.get<Animal>(
			`${environment.apiUrl}/animals/${animalId}`
		)
	}
}
