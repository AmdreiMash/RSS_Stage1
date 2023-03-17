import { setings } from "./setings";

export function result() {
	let results = document.querySelector('.Results');
	let pop = document.querySelector('.popUp')
	results.addEventListener('click', () => {
		if (setings.result.length < 1) {
			document.querySelector('.result').textContent = 'Пока пусто :)'
		} else {
			document.querySelector('.result').textContent = ''
			setings.result.forEach((e, index) => {
				let res = pop.querySelector('.result')
				let p = document.createElement('p')
				p.textContent = index + 1 + '.' + ' ' + e.join(' - ')
				res.append(p)
			})
		}
		pop.classList.add('act')
	})
	pop.addEventListener('click', () => {
		pop.classList.remove('act')
	})
}