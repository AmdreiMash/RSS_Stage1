import './styles/main.scss'
import { buildHeader } from './moduls/buildHeader'
import buildGame from './moduls/buildMain'
import { buildFooter } from './moduls/buildFooter'
import { GameArea } from './moduls/startGame'
import { setings } from './moduls/setings'
import { move } from './moduls/move'
import { shuffleArea } from './moduls/shufl'
import { getTime } from './moduls/timer'
import { saundOnOff } from './moduls/soundOnOFF'
import { save } from './moduls/save'
import { result } from './moduls/result'

try {
	setings.lod()
} catch {
	console.log(setings)
}
try {
	setings.result = JSON.parse(localStorage.getItem('result')) || []
} catch {
	false
}
buildHeader()
buildGame()
buildFooter()
GameArea.start(setings.size)
document.querySelector('.area').addEventListener('click', move)
document.querySelector('.area').addEventListener('click', () => {
	setInterval(() => {
		if (setings.game == true) [
			getTime()
		]
	}, 1000);
}, { once: true })
let s = document.querySelector('.Shuffle')
s.addEventListener('click', shuffleArea)
saundOnOff()
save()
result()
alert('Добрый день! \n Коротко) \n Игра стартует посе первого клика \n При проверке адаптивности, что бы игровое поле изменило размер, нужно обновить страничку \n Выполнено все кроме перетягивания мышкой.')