import { getCount } from "./count";
import { getGameArea } from "./getGaneArea";
import { itOk } from "./itOk";
import { setings } from "./setings";
import { shuffleArea } from "./shufl";
import { getTime } from "./timer";
export const GameArea = {
	size: 0,
	area: document.createElement("div"),
	start: function () {
		getCount()
		getTime()
		this.area.classList.add('area')
		let getSize = () => {
			if (window.screen.availWidth > 1279) {
				this.size = 550
			} else if (window.screen.availWidth > 767) {
				this.size = 450
			} else {
				this.size = 300
			}
		};
		getSize()


		for (let i = 1; i < setings.size * setings.size; i++) {
			setings.nums.push(i)
			setings.vin.push(i)
		}
		setings.vin.push(0)
		setings.nums.push(0)
		shuffle(setings.nums)


		this.area.style.width = `${this.size}px`;
		this.area.style.height = `${this.size}px`;

		getGameArea()

		document.querySelector('.main').append(this.area);
		let value = itOk(setings.areaArray)

		if (+setings.size % 2 === 0) {
			if ((+value + +setings.nullPozition[0] + 1) % 2 == 1) {
				shuffleArea()
			}
		} else {
			if (+value % 2 == 1) {
				shuffleArea()
			}
		}
	}
}

export function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
}
	//`обратные кавычки`