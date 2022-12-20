import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SpeciesResolver } from './resolvers/species.resolver'
import { SpeciesListComponent } from './components/species-list/species-list.component'

const routes: Routes = [
	{
		path: '',
		component: SpeciesListComponent,
		resolve: { specie: SpeciesResolver },
	},
	// { path: ':id', component: SingleSpecieComponent },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SpeciesRoutingModule {}
