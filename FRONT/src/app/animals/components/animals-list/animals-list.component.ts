import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable, map } from 'rxjs'

import { Animal } from '../../models/animal.model'

@Component({
	selector: 'app-animals-list',
	templateUrl: './animals-list.component.html',
	styleUrls: ['./animals-list.component.scss'],
})
export class AnimalsListComponent implements OnInit {
	animals$!: Observable<Animal[]>

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.animals$ = this.route.data.pipe(map((data) => data['animals']))
	}
}
