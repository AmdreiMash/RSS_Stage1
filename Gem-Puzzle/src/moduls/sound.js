import { setings } from "./setings";
import s from './oswitch.mp3';

export function getSound() {
	if (setings.sound === 'On') {
		new Audio(s).play()
	}
}