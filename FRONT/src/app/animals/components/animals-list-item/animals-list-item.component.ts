import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core'
import { Animal } from '../../models/animal.model'

@Component({
	selector: 'app-animals-list-item',
	templateUrl: './animals-list-item.component.html',
	styleUrls: ['./animals-list-item.component.scss'],
})
export class AnimalsListItemComponent implements OnInit {
	@Input() animal!: Animal

	constructor() {}

	ngOnInit(): void {}
}
