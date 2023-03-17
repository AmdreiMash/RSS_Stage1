import { setings } from './setings'
import { GameArea } from './startGame'
export function buildFooter() {
	const footer = document.createElement('footer')
	footer.classList.add('footer')
	for (let i = 3; i < 9; i++) {
		const size = document.createElement('button')
		size.textContent = `${i}x${i}`
		size.classList.add('size')
		size.classList.add(`${i}`)
		footer.append(size)
	}
	document.querySelector('body').append(footer)
	footer.addEventListener('click', getSetings)
}

export function getSetings(event) {
	if (setings.size == event.target.textContent[0]) {
		return false
	} else {
		setings.nums = []
		setings.loadNums = null;
		setings.game = false;
		setings.count = 0;
		setings.time = 0;
		setings.size = event.target.textContent[0];
		document.querySelector('.area').innerHTML = '';
		setings.areaArray = [];
		setings.vin = [];
		GameArea.start(setings.size);
	}
}
