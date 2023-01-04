import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'gender',
})
export class GenderPipe implements PipeTransform {
	transform(value: string | undefined): string {
		let gender: string = ''

		switch (value) {
			case 'M': {
				gender = 'Male'
				break
			}
			case 'F': {
				gender = 'Female'
				break
			}
			case 'unknown': {
				gender = 'Unknown'
				break
			}
			default: {
				gender = 'Error'
				break
			}
		}

		return gender
	}
}
