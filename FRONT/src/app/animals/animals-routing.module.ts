import { NgModule } from '@angular/core'

import { RouterModule, Routes } from '@angular/router'
import { AnimalsResolver } from './resolvers/animals.resolver'

import { AnimalsListComponent } from './components/animals-list/animals-list.component'
import { SingleAnimalComponent } from './components/single-animal/single-animal.component'

const routes: Routes = [
	{
		path: '',
		component: AnimalsListComponent,
		resolve: { animals: AnimalsResolver },
	},
	{ path: ':id', component: SingleAnimalComponent },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AnimalsRoutingModule {}
