import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SpeciesResolver } from './resolvers/species.resolver'

const routes: Routes = [
	// {
	// 	path: '',
	// 	component: SpeciesListComponent,
	// 	resolve: { animals: SpeciesResolver },
	// },
	// { path: ':id', component: SingleSpecieComponent },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SpeciesRoutingModule {}
