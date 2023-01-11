import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'position',
})
export class PositionPipe implements PipeTransform {
	transform(value: number | undefined): string {
		let position: string = ''

		switch (value) {
			case 0: {
				position = 'enclosure-inside'
				break
			}
			case 1: {
				position = 'enclosure-outside'
				break
			}
			case 2: {
				position = 'clinic'
				break
			}
			case 3: {
				position = 'loan'
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
