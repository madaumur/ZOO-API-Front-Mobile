import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable, map } from 'rxjs'

import { Animal } from '../../models/animal.model'
import { AnimalsService } from '../../services/animals.service'

@Component({
	selector: 'app-animals-list',
	templateUrl: './animals-list.component.html',
	styleUrls: ['./animals-list.component.scss'],
})
export class AnimalsListComponent implements OnInit {
	animals$!: Observable<Animal[]>

	constructor(
		private route: ActivatedRoute,
		private animalsService: AnimalsService
	) {}

	ngOnInit(): void {
		//this.animals$ = this.route.data.pipe(map((data) => data['data.result']))
	}
}
