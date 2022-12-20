import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SpeciesRoutingModule } from './species-routing.module'
import { SharedModule } from '../shared/shared.module'
import { SpeciesService } from './services/species.service'
import { SpeciesResolver } from './resolvers/species.resolver'
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { SpeciesListItemComponent } from './components/species-list-item/species-list-item.component'

@NgModule({
	declarations: [SpeciesListComponent, SpeciesListItemComponent],
	imports: [CommonModule, SpeciesRoutingModule, SharedModule],
	providers: [SpeciesService, SpeciesResolver],
})
export class SpeciesModule {}
