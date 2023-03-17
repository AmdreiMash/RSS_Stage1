import { setings } from "./setings"


export function getTime() {
	let n = setings.time
	let minut = Math.floor(n / 60)
	let seconds = n % 60
	if (setings.game == true) {
		setings.time++
	}
	document.querySelector('.time').textContent = `Time: ${String(minut).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}
