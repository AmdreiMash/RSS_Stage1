import { GameArea } from "./startGame";
import { check } from "./check";
import { setings } from "./setings";
import { getCount } from "./count";
import { getSound } from "./sound";
import { vin } from "./vin";

export function move(event) {
	setings.game = true
	function translate(node, x = 0, y = 0, direction = '-') {
		let p = node.style.translate
		p = p.split(' ').map(e => +e.slice(0, -2))
		while (p.length < (2)) {
			p.push(0)
		}
		if (direction === '+') {
			node.style.translate = `${p[0] + x}px ${p[1] + y}px`
		} else {
			node.style.translate = `${p[0] - x}px ${p[1] - y}px`
		}

	}
	if (event.target.textContent === '') {
		return false
	} else {
		let n = event.target.textContent
		let direction = check(n)
		console.log(direction)
		let dist = GameArea.size / setings.size
		if (direction == 'top') {
			translate(event.target, 0, dist, '+')
			translate(document.querySelector('.empty'), 0, dist, '-')
			getCount()
			getSound()
		}
		else if (direction == 'bottom') {
			translate(event.target, 0, dist, '-')
			translate(document.querySelector('.empty'), 0, dist, '+')
			getCount()
			getSound()
		}
		else if (direction == 'left') {
			translate(event.target, dist, 0, '+')
			translate(document.querySelector('.empty'), dist, 0, '-')
			getCount()
			getSound()
		}
		else if (direction == 'right') {
			translate(event.target, dist, 0, '-')
			translate(document.querySelector('.empty'), dist, 0, '+')
			getCount()
			getSound()
		}
		if (setings.areaArray.join(',') == setings.vin.join(',')) {
			setTimeout(() => {
				vin()
			}, 500)
		}
	}
}