export function itOk(arr) {
	let testArr = arr.join(',').split(',');

	let counter = 0;
	for (let i = 0; i < testArr.length; i++) {
		for (let j = i; j < testArr.length; j++) {
			if (testArr[i] > testArr[j] && testArr[j] != 0) {
				counter++
			}
		}
	}
	return counter
}