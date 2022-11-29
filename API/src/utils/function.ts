function urlToPosition(url: string): number {
	if (url.includes('/getin')) {
		return 0
	} else if (url.includes('/getout')) {
		return 1
	} else if (url.includes('/toclinic')) {
		return 2
	} else if (url.includes('/toloan')) {
		return 3
	} else return -1
}

function reversePosition(position: number): number {
	if (position == 0) {
		return 1
	} else if (position == 1) {
		return 0
	} else return -1
}

export { urlToPosition, reversePosition }
