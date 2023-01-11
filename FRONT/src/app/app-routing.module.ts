import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
	{
		path: 'animals',
		loadChildren: () =>
			import('./animals/animals.module').then((m) => m.AnimalsModule),
	},
	{
		path: 'species',
		loadChildren: () =>
			import('./species/species.module').then((m) => m.SpeciesModule),
	},
	{
		path: 'users',
		loadChildren: () =>
			import('./users/users.module').then((m) => m.UsersModule),
	},
	// Pour n'importe qu'elle route non reconnue
	{ path: '**', redirectTo: 'animals' },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
