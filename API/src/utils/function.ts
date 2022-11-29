function whereToMove(url: string): number {
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

export default whereToMove
