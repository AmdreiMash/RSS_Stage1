import { setings } from "./setings";
import { GameArea } from "./startGame";

export function getGameArea() {
	let localNums = setings.loadNums || setings.nums;
	for (let i = 0; i < setings.size; i++) {
		setings.areaArray.push([])//! переделать
		for (let j = 0; j < setings.size; j++) {
			let item = document.createElement('div')
			item.style.width = `${GameArea.size / setings.size}px`;
			item.style.height = `${GameArea.size / setings.size}px`;
			item.style.translate = `${j * (GameArea.size / setings.size)}px ${i * (GameArea.size / setings.size)}px`;
			localNums[localNums.length - 1] === 0 ? setings.nullPozition = [i, j] : false;
			setings.areaArray[i].push(localNums[localNums.length - 1]) //!переделать 
			item.textContent = localNums.pop()
			if (item.textContent == 0) {
				item.classList.add('empty')
				item.textContent = ''
			} else {
				item.classList.add('block')
			}
			GameArea.area.append(item)
			setings.loadNums = null
		}
	}
}