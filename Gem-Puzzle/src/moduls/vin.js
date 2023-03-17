import { setings } from "./setings";
import { GameArea } from "./startGame";

export function vin() {
	setings.game = false;
	setings.result.push([`${setings.size}x${setings.size}`, `Moves: ${setings.count}`, document.querySelector('.time').textContent])
	if (setings.result.length > 10) {
		setings.result.shift()
	}
	alert(`Hooray! You solved the puzzle! \n Your result: ${(document.querySelector('.time').textContent).toLocaleLowerCase()} and ${setings.count} moves`)
	localStorage.setItem('result', JSON.stringify(setings.result))
	document.querySelector('.area').innerHTML = '';
}

