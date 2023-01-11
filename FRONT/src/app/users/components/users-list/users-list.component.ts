import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { User } from '../../models/user.model'
import { UserService } from '../../services/user.service'

@Component({
	selector: 'app-users-list',
	templateUrl: './users-list.component.html',
	styleUrls: ['./users-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
	loading$!: Observable<boolean>
	users$!: Observable<User[]>

	constructor(private userService: UserService) {}

	ngOnInit(): void {
		this.users$ = this.userService.users$
		this.loading$ = this.userService.loading$
		this.userService.getUsersFromServ()
	}
}
