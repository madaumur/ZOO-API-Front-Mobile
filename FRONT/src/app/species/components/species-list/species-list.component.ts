import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable, map } from 'rxjs'

import { Specie } from '../../models/specie.model'

@Component({
	selector: 'app-species-list',
	templateUrl: './species-list.component.html',
	styleUrls: ['./species-list.component.scss'],
})
export class SpeciesListComponent {
	species$!: Observable<Specie[]>

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.species$ = this.route.data.pipe(map((data) => data['specie']))
	}
}
