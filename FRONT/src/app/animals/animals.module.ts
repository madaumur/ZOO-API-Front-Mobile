import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AnimalsRoutingModule } from './animals-routing.module'
import { AnimalsListComponent } from './components/animals-list/animals-list.component'
import { AnimalService } from './services/animal.service'
import { SharedModule } from '../shared/shared.module'
import { SingleAnimalComponent } from './components/single-animal/single-animal.component'

@NgModule({
	declarations: [AnimalsListComponent, SingleAnimalComponent],
	imports: [CommonModule, SharedModule, AnimalsRoutingModule],
	providers: [AnimalService],
})
export class AnimalsModule {}
