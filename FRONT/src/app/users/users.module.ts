import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UserService } from './services/user.service'
import { UsersListComponent } from './components/users-list/users-list.component'
import { UsersRoutingModule } from './users-routing.module'

import { SharedModule } from '../shared/shared.module'

@NgModule({
	declarations: [UsersListComponent],
	imports: [CommonModule, SharedModule, UsersRoutingModule],
	providers: [UserService],
})
export class UsersModule {}
