import { GameArea } from "./startGame"
import { setings } from "./setings"

export function shuffleArea() {
	setings.nums = []
	setings.vin = []
	setings.game = false
	setings.count = 0
	setings.time = 0
	document.querySelector('.area').innerHTML = ''
	setings.areaArray = []
	GameArea.start(setings.size)
	console.log(setings.nullPozition)
}
