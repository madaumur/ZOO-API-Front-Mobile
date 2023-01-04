import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Observable, map, switchMap, take, tap } from 'rxjs'
import { Animal } from '../../models/animal.model'
import { AnimalService } from '../../services/animal.service'

@Component({
	selector: 'app-single-animal',
	templateUrl: './single-animal.component.html',
	styleUrls: ['./single-animal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleAnimalComponent implements OnInit {
	loading$!: Observable<boolean>
	animal$!: Observable<Animal>
	position$!: Observable<number>

	constructor(
		private animalService: AnimalService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.initObservable()
	}

	private initObservable(): void {
		this.loading$ = this.animalService.loading$
		this.animal$ = this.route.params.pipe(
			switchMap(
				(params: Params): Observable<Animal> =>
					this.animalService.getAnimalById(params['id'])
			)
		)
	}

	setOut(): void {
		this.animal$
			.pipe(
				take(1),
				tap((animal: Animal): void => {
					this.animalService.moveOutAnimal(animal._id)
				})
			)
			.subscribe()
	}

	setIn(): void {
		this.animal$
			.pipe(
				take(1),
				tap((animal: Animal): void => {
					this.animalService.moveInAnimal(animal._id)
				})
			)
			.subscribe()
	}

	onGoBack(): void {
		this.router.navigateByUrl('/animals')
	}
}
