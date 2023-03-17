import { setings } from "./setings"

export function save() {
	let button = document.querySelector('.Save')
	button.addEventListener('click', () => {
		localStorage.setItem('setings', JSON.stringify(setings.areaArray))
		localStorage.setItem('size', setings.size)
		localStorage.setItem('nullPozition', setings.nullPozition)
		localStorage.setItem('time', setings.time)
		localStorage.setItem('count', setings.count)
	})
}
//! добавить резьлтаты 