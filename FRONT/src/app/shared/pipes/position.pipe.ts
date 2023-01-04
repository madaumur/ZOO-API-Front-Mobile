import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'position',
})
export class PositionPipe implements PipeTransform {
	transform(value: number | undefined): string {
		let position: string = ''

		switch (value) {
			case 0: {
				position = 'enclosure-Inside'
				break
			}
			case 1: {
				position = 'enclosure-Outside'
				break
			}
			case 2: {
				position = 'Clinic'
				break
			}
			case 3: {
				position = 'Loan'
				break
			}
			default: {
				position = 'error'
				break
			}
		}

		return position
	}
}
