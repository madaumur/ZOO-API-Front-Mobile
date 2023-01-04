import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {
	BehaviorSubject,
	Observable,
	delay,
	map,
	switchMap,
	take,
	tap,
} from 'rxjs'
import { environment } from '../../../environments/environment'
import { Animal } from '../models/animal.model'

@Injectable()
export class AnimalService {
	constructor(private http: HttpClient) {}

	// delai pour montrer que ça travaille dur derrière et surtout montrer quand on contacte la bdd
	private FAKEDELAY: number = 250
	/**
	 * Gestion du statut de chargement pour anticiper le temps de la réponse du serveur
	 * + Getter et Setter pour fonctionner de l'exterieur comme un observable
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
	 *	Fonctions pour les animaux
	 * + Getter pour fonctionner de l'exterieur comme un observable
	 */
	private _animals$: BehaviorSubject<Animal[]> = new BehaviorSubject<
		Animal[]
	>([])

	get animals$(): Observable<Animal[]> {
		return this._animals$.asObservable()
	}

	// Donne le timestamp de la dernière recharge des animaux
	private lastAnimalLoad: number = 0

	getAnimalsFromServ(): void {
		if (Date.now() - this.lastAnimalLoad <= 120000) {
			return
		} // la valeur 120 000 = interval de 2min pour réinterroger l'API

		this.setLoadingStatus(true)

		this.http
			.get<Animal[]>(`${environment.apiUrl}/animals`)
			.pipe(
				delay(this.FAKEDELAY),
				tap((animals: Animal[]): void => {
					this._animals$.next(animals)
					this.setLoadingStatus(false)
					this.lastAnimalLoad = Date.now()
				})
			)
			.subscribe()
	}

	getAnimalById(id: string): Observable<Animal> {
		if (!this.lastAnimalLoad) {
			this.getAnimalsFromServ()
		} // Si on a pas recherché d'animaux (cas du refresh de la page, on relance une requète au serveur)

		return this.animals$.pipe(
			map(
				(animals: Animal[]): Animal =>
					animals.filter(
						(animal: Animal): boolean => animal._id === id
					)[0]
			)
		)
	}

	moveOutAnimal(id: string): void {
		this.setLoadingStatus(true)
		// On va attendre la réponse du serveur pour finir l'opération
		this.http
			.post(`${environment.apiUrl}/animals/${id}/getout`, '')
			.pipe(
				delay(this.FAKEDELAY),
				// On récupère les animaux
				switchMap((): Observable<Animal[]> => this.animals$),
				take(1),
				// On filtre à celui que l'on souhaite modifier (par son id)
				map((candidates: Animal[]): Animal[] =>
					candidates.map(
						// On change la position pour le front car on sait que la bdd a réussi
						(candidate: Animal): Animal =>
							candidate._id === id
								? { ...candidate, position: 1 }
								: candidate
					)
				),
				// On maj du behavior subject
				tap((animals: Animal[]): void => {
					this.setLoadingStatus(false)
					this._animals$.next(animals)
				})
			)
			.subscribe()
	}

	moveInAnimal(id: string): void {
		this.setLoadingStatus(true)
		this.http
			.post(`${environment.apiUrl}/animals/${id}/getin`, '')
			.pipe(
				delay(this.FAKEDELAY),
				switchMap((): Observable<Animal[]> => this.animals$),
				take(1),
				map((candidates: Animal[]): Animal[] =>
					candidates.map(
						(candidate: Animal): Animal =>
							candidate._id === id
								? { ...candidate, position: 0 }
								: candidate
					)
				),
				tap((animals: Animal[]): void => {
					this.setLoadingStatus(false)
					this._animals$.next(animals)
				})
			)
			.subscribe()
	}
}
