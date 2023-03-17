import { setings } from "./setings";

export function check(n) {
	let row = +setings.nullPozition[0]
	let colum = +setings.nullPozition[1]
	try {
		if (setings.areaArray[row - 1][colum] == n) {
			setings.areaArray[row - 1][colum] = 0
			setings.areaArray[row][colum] = +n
			setings.nullPozition = [row - 1, colum]
			return 'top'
		}
	} catch {
		null
	}
	try {
		if (setings.areaArray[row + 1][colum] == n) {
			setings.areaArray[row + 1][colum] = 0
			setings.areaArray[row][colum] = +n
			setings.nullPozition = [row + 1, colum]
			return 'bottom'
		}
	} catch {
		null
	}
	try {
		if (setings.areaArray[row][colum - 1] == n) {
			setings.areaArray[row][colum - 1] = 0
			setings.areaArray[row][colum] = +n
			setings.nullPozition = [row, colum - 1]
			return 'left'
		}
	} catch {
		null
	}
	try {
		if (setings.areaArray[row][colum + 1] == n) {
			setings.areaArray[row][colum + 1] = 0
			setings.areaArray[row][colum] = +n
			setings.nullPozition = [row, colum + 1]
			return 'right'
		} else return null
	} catch {
		null
	}
}