import { Router } from '@angular/router'
import { Specie } from './../../models/specie.model'
import { Component, Input } from '@angular/core'

@Component({
	selector: 'app-species-list-item',
	templateUrl: './species-list-item.component.html',
	styleUrls: ['./species-list-item.component.scss'],
})
export class SpeciesListItemComponent {
	@Input() specie!: Specie

	constructor(private router: Router) {}

	ngOnInit(): void {}
}
