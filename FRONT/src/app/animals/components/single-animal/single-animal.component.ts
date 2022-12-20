import { Component } from '@angular/core'

import { Observable, map } from 'rxjs'

import { ActivatedRoute } from '@angular/router'

import { Animal } from '../../models/animal.model'
import { Specie } from './../../../species/models/specie.model'
import { AnimalsService } from '../../services/animals.service'

@Component({
	selector: 'app-single-animal',
	templateUrl: './single-animal.component.html',
	styleUrls: ['./single-animal.component.scss'],
})
export class SingleAnimalComponent {
	animals$!: Observable<Animal>
	specie$!: Observable<Specie>

	constructor(
		private animalService: AnimalsService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		let animalId: string | null = this.route.snapshot.paramMap.get('id')

		if (animalId) {
			this.animals$ = this.animalService.getAnimalById(animalId)
		}
	}
}
