import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
	// Pas de routes directement, mais du lazy loading
	{
		path: 'animals',
		loadChildren: () =>
			import('./animals/animals.module').then((m) => m.AnimalsModule),
	},
	// Pour n'importe qu'elle route non reconnue
	{ path: '**', redirectTo: 'animals' },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
