import { setings } from "./setings";
export function getCount() {
	if (setings.game == true) {
		setings.count++
	}
	document.querySelector('.moves').textContent = `Moves: ${setings.count}`
}