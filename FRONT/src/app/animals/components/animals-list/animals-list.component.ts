import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Observable, startWith, map, combineLatest } from 'rxjs'
import { FormBuilder, FormControl } from '@angular/forms'

import { AnimalService } from '../../services/animal.service'
import { Animal } from '../../models/animal.model'

@Component({
	selector: 'app-animals-list',
	templateUrl: './animals-list.component.html',
	styleUrls: ['./animals-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimalsListComponent implements OnInit {
	loading$!: Observable<boolean>
	animals$!: Observable<Animal[]>
	searchCtrl!: FormControl

	constructor(
		private animalService: AnimalService,
		private formBuilder: FormBuilder
	) {}

	ngOnInit(): void {
		this.initForm()
		this.initObsevable()
		this.animalService.getAnimalsFromServ()
	}

	// Initialisation du formulaire pour chercher un animal
	private initForm(): void {
		this.searchCtrl = this.formBuilder.control('')
	}

	// Initialisation de la liste des animaux
	private initObsevable(): void {
		this.loading$ = this.animalService.loading$
		this.animals$ = this.animalService.animals$

		const search$: Observable<string> = this.searchCtrl.valueChanges.pipe(
			startWith(this.searchCtrl.value),
			map((value: string): string => value.trim().toLowerCase())
		)

		this.animals$ = combineLatest([
			search$,
			this.animalService.animals$,
		]).pipe(
			map(([search, animals]: [string, Animal[]]): Animal[] =>
				animals.filter((animal: Animal): boolean =>
					animal.name.toLowerCase().includes(search as string)
				)
			)
		)
	}
}
