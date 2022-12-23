import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core'
import { Animal } from '../../models/animal.model'
import { Router } from '@angular/router'

@Component({
	selector: 'app-animals-list-item',
	templateUrl: './animals-list-item.component.html',
	styleUrls: ['./animals-list-item.component.scss'],
})
export class AnimalsListItemComponent implements OnInit {
	@Input() animal!: Animal

	constructor(private router: Router) {}

	ngOnInit(): void {}

	onViewAnimal() {
		this.router.navigateByUrl(`animals/${this.animal._id}`)
	}
}
