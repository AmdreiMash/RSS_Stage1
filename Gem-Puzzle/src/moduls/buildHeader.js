import { setings } from "./setings"

export function buildHeader() {
	const body = document.querySelector('body')
	const header = document.createElement('header')

	header.classList.add('header')

	const menu = document.createElement('div')
	menu.classList.add('menu')

	const buttonsText = ['Shuffle', 'Saund', 'Save', 'Results']

	buttonsText.forEach(text => {
		let button = document.createElement('button')
		button.classList.add('button')
		button.classList.add(text)
		button.textContent = text
		menu.append(button)
	})


	const counters = document.createElement('div')
	counters.classList.add('counters')
	const time = document.createElement('span')
	time.classList.add('time')
	const moves = document.createElement('span')
	moves.classList.add('moves')
	moves.textContent = `Moves: ${setings.count}`
	//time.textContent = getTime()
	counters.append(moves)
	counters.append(time)
	header.append(menu)
	header.append(counters)
	body.append(header)

	menu.querySelector('.Saund').textContent = menu.querySelector('.Saund').textContent + ' ' + setings.sound;

	let popUp = document.createElement('div')
	popUp.classList.add('popUp')
	let result = document.createElement('div')
	result.classList.add('result')
	popUp.append(result)
	header.append(popUp)
}
