import { log } from 'console'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user.model'
import { BehaviorSubject, Observable, delay, map, tap } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private http: HttpClient) {}

	// delai pour montrer que ça travaille dur derrière et surtout montrer quand on contacte la bdd
	private FAKEDELAY: number = 250
	/**
	 *	Statut de Loading
	 */
	private _loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
		false
	)

	get loading$(): Observable<boolean> {
		return this._loading$.asObservable()
	}

	private setLoadingStatus(loading: boolean): void {
		this._loading$.next(loading)
	}

	/**
	 *	Gestion des users
	 */
	private _users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([])

	get users$(): Observable<User[]> {
		return this._users$.asObservable()
	}

	/**
	 *	Donne le timestamp de la dernière recharge des users
	 */
	private lastUserLoaded: number = 0

	/**
	 *	Get des users depuis l'API
	 */
	getUsersFromServ(): void {
		if (Date.now() - this.lastUserLoaded <= 120000) {
			return
		} // la valeur 120 000 = interval de 2min pour réinterroger l'API

		this.setLoadingStatus(true)

		this.http
			.get<any>(`${environment.apiUrl}/employees`)
			.pipe(
				delay(this.FAKEDELAY),
				tap({
					next: (data): void => {
						console.log('[API response message] : ' + data.message)
						this._users$.next(data.result)
						this.setLoadingStatus(false)
						this.lastUserLoaded = Date.now()
					},
					error: (error): void => console.log(error),
				})
			)
			.subscribe()
	}

	/**
	 *	Get d'un user depuis les users obtenus ci dessus
	 */
	getUserById(id: string): Observable<User> {
		if (!this.lastUserLoaded) {
			this.getUsersFromServ()
		} // Si on a pas recherché d'users (cas du refresh de la page, on relance une requète au serveur)

		return this.users$.pipe(
			map(
				(users: User[]): User =>
					users.filter((user: User): boolean => user._id === id)[0]
			)
		)
	}
}
